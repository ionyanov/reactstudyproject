import {type FC, useCallback} from 'react'
import {useTranslation} from 'react-i18next'
import {useSelector} from 'react-redux'
import {getUserAuthData} from 'entities/User'
import {classNames} from 'shared/lib/classNames/classNames'
import {useAppDispatch} from 'shared/lib/hooks/useAppDispatch/useAppDispatch'
import {Button, ButtonTheme} from 'shared/ui/Button/Button'
import {Text} from 'shared/ui/Text/Text'
import {getProfileData} from '../../model/selectors/getProfileData/getProfileData'
import {getProfileReadOnly} from '../../model/selectors/getProfileReadOnly/getProfileReadOnly'
import {updateProfileData} from '../../model/servises/updateProfileData/updateProfileData'
import {profileActions} from '../../model/slice/profileSlice'
import cls from './EditableProfileCardHeader.module.scss'

interface EditableProfileCardHeaderProps {
    className?: string
}

export const EditableProfileCardHeader: FC<EditableProfileCardHeaderProps> = (props) => {
    const {t} = useTranslation('profile')
    const dispatch = useAppDispatch()

    const readOnly = useSelector(getProfileReadOnly)
    const authData = useSelector(getUserAuthData)
    const profileData = useSelector(getProfileData)

    const canEdit = authData?.id === profileData?.id

    const onEdit = useCallback(() => {
        dispatch(profileActions.setReadonly(false))
    }, [dispatch])

    const onCancel = useCallback(() => {
        dispatch(profileActions.cancelEdit())
    }, [dispatch])

    const onSave = useCallback(() => {
        if (profileData?.id) {
            dispatch(updateProfileData(profileData?.id))
        }
    }, [dispatch, profileData])

    return (
        <div className={classNames(cls.EditableProfileCardHeader, {}, [props.className])}>
            <Text title={t('Профиль') || ''}/>
            {canEdit && (
                readOnly
                    ? (
                        <Button
                            className={cls.editBtn}
                            onClick={onEdit}
                        >
                            {t('Редактировать')}
                        </Button>
                    )
                    : (
                        <>
                            <Button className={cls.saveBtn}
                                onClick={onSave}
                            >
                                {t('Сохранить')}
                            </Button>
                            <Button onClick={onCancel}
                                theme={ButtonTheme.OUTLINE_RED}
                            >
                                {t('Отмена')}
                            </Button>
                        </>
                    )
            )}
        </div>
    )
}
