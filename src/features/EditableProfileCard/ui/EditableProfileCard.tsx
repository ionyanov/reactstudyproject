import {type FC, useCallback} from 'react'
import {useTranslation} from 'react-i18next'
import {useSelector} from 'react-redux'
import {useParams} from 'react-router-dom'
import {type Country} from 'entities/Country'
import {type Currency} from 'entities/Currency'
import {ProfileCard, ValidateProfileError} from 'entities/Profile'
import {classNames} from 'shared/lib/classNames/classNames'
import {useAppDispatch} from 'shared/lib/hooks/useAppDispatch/useAppDispatch'
import {useInitialEffect} from 'shared/lib/hooks/useInitialEffect/useInitialEffect'
import {VStack} from 'shared/ui/Stack'
import {Text, TextTheme} from 'shared/ui/Text/Text'
import {getProfileError} from '../model/selectors/getProfileError/getProfileError'
import {getProfileForm} from '../model/selectors/getProfileForm/getProfileForm'
import {getProfileIsLoading} from '../model/selectors/getProfileIsLoading/getProfileIsLoading'
import {getProfileReadOnly} from '../model/selectors/getProfileReadOnly/getProfileReadOnly'
import {getProfileValidateError} from '../model/selectors/getProfileValidateError/getProfileValidateError'
import {fetchProfileData} from '../model/servises/fetchProfileData/fetchProfileData'
import {profileActions} from '../model/slice/profileSlice'
import cls from './EditableProfileCard.module.scss'
import {EditableProfileCardHeader} from './EditableProfileCardHeader/EditableProfileCardHeader'

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
            <VStack className={classNames(cls.EditableProfileCard, {}, [props.className])}>
                <Text theme={TextTheme.ERROR}
                    text={t('Профиль не найден!')}
                />
            </VStack>
        )
    }

    return (
        <VStack gap={'16'} max className={classNames(cls.EditableProfileCard, {}, [props.className])}>
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
        </VStack>
    )
}
