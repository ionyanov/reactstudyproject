import {type FC, useCallback} from 'react'
import {useSelector} from 'react-redux'
import {classNames} from 'shared/lib/classNames/classNames'
import cls from './EditableProfileCard.module.scss'
import {useAppDispatch} from 'shared/lib/hooks/useAppDispatch/useAppDispatch'
import {ProfileCard, ValidateProfileError} from 'entities/Profile'
import {EditableProfileCardHeader} from './EditableProfileCardHeader/EditableProfileCardHeader'
import {profileActions} from '../model/slice/profileSlice'
import {getProfileError} from '../model/selectors/getProfileError/getProfileError'
import {getProfileIsLoading} from '../model/selectors/getProfileIsLoading/getProfileIsLoading'
import {getProfileReadOnly} from '../model/selectors/getProfileReadOnly/getProfileReadOnly'
import {fetchProfileData} from '../model/servises/fetchProfileData/fetchProfileData'
import {getProfileForm} from '../model/selectors/getProfileForm/getProfileForm'
import {type Currency} from 'entities/Currency'
import {type Country} from 'entities/Country'
import {getProfileValidateError} from '../model/selectors/getProfileValidateError/getProfileValidateError'
import {Text, TextTheme} from 'shared/ui/Text/Text'
import {useTranslation} from 'react-i18next'
import {useParams} from 'react-router-dom'
import {useInitialEffect} from 'shared/lib/hooks/useInitialEffect/useInitialEffect'

interface EditableProfileCardProps {
    className?: string
}

export const EditableProfileCard: FC<EditableProfileCardProps> = (props) => {
    const {t} = useTranslation('profile')
    const {id} = useParams<{id: string}>()

    const dispatch = useAppDispatch()
    const data = useSelector(getProfileForm)
    const error = useSelector(getProfileError)
    const isLoading = useSelector(getProfileIsLoading)
    const readOnly = useSelector(getProfileReadOnly)
    const errors: ValidateProfileError[] = useSelector(getProfileValidateError)

    const validateErrorTranslate = {
        [ValidateProfileError.INCORRECT_USER_DATA]: t('Профиль не может быть пустым'),
        [ValidateProfileError.INCORRECT_NAME]: t('Имя и фамилия обязательны'),
        [ValidateProfileError.INCORRECT_AGE]: t('Возраст не может быть меньше 18'),
        [ValidateProfileError.SERVER_ERROR]: t('Ошибка получения данных')
    }

    useInitialEffect(() => {
        if (id) {
            dispatch(fetchProfileData(id))
        }
    })

    const onChangeFirstName = useCallback((value: string) => {
        dispatch(profileActions.setProfile({firstname: value}))
    }, [dispatch])

    const onChangeLastName = useCallback((value: string) => {
        dispatch(profileActions.setProfile({lastname: value}))
    }, [dispatch])

    const onChangeCity = useCallback((value: string) => {
        dispatch(profileActions.setProfile({city: value}))
    }, [dispatch])

    const onChangeUserName = useCallback((value: string) => {
        dispatch(profileActions.setProfile({username: value}))
    }, [dispatch])

    const onChangeAvatar = useCallback((value: string) => {
        dispatch(profileActions.setProfile({avatar: value}))
    }, [dispatch])

    const onChangeAge = useCallback((value: string) => {
        dispatch(profileActions.setProfile({age: Number(value)}))
    }, [dispatch])

    const onChangeCurrency = useCallback((value: Currency) => {
        dispatch(profileActions.setProfile({currency: value}))
    }, [dispatch])

    const onChangeCountry = useCallback((value: Country) => {
        dispatch(profileActions.setProfile({country: value}))
    }, [dispatch])

    if (!id) {
        return (
            <div className={classNames(cls.EditableProfileCard, {}, [props.className])}>
                <Text theme={TextTheme.ERROR}
                    text={t('Профиль не найден!')}
                />
            </div>
        )
    }

    return (
        <div className={classNames(cls.EditableProfileCard, {}, [props.className])}>
            <EditableProfileCardHeader/>
            {errors.length > 0 && errors.map(err => (
                <Text theme={TextTheme.ERROR}
                    text={validateErrorTranslate[err]}
                    key={err.toString()}
                />
            ))}
            <ProfileCard
                data={data}
                error={error}
                isLoading={isLoading}
                readOnly={readOnly}
                onChangeFirstName={onChangeFirstName}
                onChangeLastName={onChangeLastName}
                onChangeAge={onChangeAge}
                onChangeCurrency={onChangeCurrency}
                onChangeCountry={onChangeCountry}
                onChangeCity={onChangeCity}
                onChangeUserName={onChangeUserName}
                onChangeAvatar={onChangeAvatar}
            />
        </div>
    )
}
