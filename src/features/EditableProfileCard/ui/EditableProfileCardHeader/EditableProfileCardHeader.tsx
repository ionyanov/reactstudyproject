import {type FC, useCallback} from 'react'
import {useTranslation} from 'react-i18next'
import {Text} from 'shared/ui/Text/Text'
import {Button, ButtonTheme} from 'shared/ui/Button/Button'
import {classNames} from 'shared/lib/classNames/classNames'
import cls from './EditableProfileCardHeader.module.scss'
import {useSelector} from 'react-redux'
import {getProfileReadOnly} from 'features/EditableProfileCard/model/selectors/getProfileReadOnly/getProfileReadOnly'
import {useAppDispatch} from 'shared/lib/hooks/useAppDispatch/useAppDispatch'
import {profileActions} from 'features/EditableProfileCard/model/slice/profileSlice'
import {updateProfileData} from 'features/EditableProfileCard/model/servises/updateProfileData/updateProfileData'

interface EditableProfileCardHeaderProps {
    className?: string
}

export const EditableProfileCardHeader: FC<EditableProfileCardHeaderProps> = (props) => {
    const {t} = useTranslation('profile')
    const dispatch = useAppDispatch()

    const readOnly = useSelector(getProfileReadOnly)

    const onEdit = useCallback(() => {
        dispatch(profileActions.setReadonly(false))
    }, [dispatch])

    const onCancel = useCallback(() => {
        dispatch(profileActions.cancelEdit())
    }, [dispatch])

    const onSave = useCallback(() => {
        dispatch(updateProfileData())
    }, [dispatch])

    return (
        <div className={classNames(cls.EditableProfileCardHeader, {}, [props.className])}>
            <Text title={t('Профиль') || ''}/>
            {readOnly
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
            }
        </div>
    )
}
