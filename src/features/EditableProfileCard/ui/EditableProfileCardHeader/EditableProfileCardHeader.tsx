import {type FC, useCallback} from 'react'
import {useTranslation} from 'react-i18next'
import {Text} from 'shared/ui/Text/Text'
import {Button, ButtonTheme} from 'shared/ui/Button/Button'
import {classNames} from 'shared/lib/classNames/classNames'
import cls from './EditableProfileCardHeader.module.scss'
import {useSelector} from 'react-redux'
import {getProfileReadOnly} from '../../model/selectors/getProfileReadOnly/getProfileReadOnly'
import {useAppDispatch} from 'shared/lib/hooks/useAppDispatch/useAppDispatch'
import {profileActions} from '../../model/slice/profileSlice'
import {updateProfileData} from '../../model/servises/updateProfileData/updateProfileData'
import {getUserAuthData} from 'entities/User'
import {getProfileData} from '../../model/selectors/getProfileData/getProfileData'

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
