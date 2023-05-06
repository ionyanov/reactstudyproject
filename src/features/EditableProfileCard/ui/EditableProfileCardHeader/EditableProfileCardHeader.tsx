import {type FC, useCallback} from 'react'
import {useTranslation} from 'react-i18next'
import {useSelector} from 'react-redux'
import {getUserAuthData} from '@/entities/User'
import {useAppDispatch} from '@/shared/lib/hooks/useAppDispatch/useAppDispatch'
import {Button, ButtonTheme} from '@/shared/ui/Button'
import {HStack} from '@/shared/ui/Stack'
import {Text} from '@/shared/ui/Text'
import {getProfileData} from '../../model/selectors/getProfileData/getProfileData'
import {getProfileReadOnly} from '../../model/selectors/getProfileReadOnly/getProfileReadOnly'
import {updateProfileData} from '../../model/servises/updateProfileData/updateProfileData'
import {profileActions} from '../../model/slice/profileSlice'

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
        <HStack max justify={'between'} className={props.className}>
            <Text title={t('Профиль') || ''}/>
            {canEdit && (
                readOnly
                    ? (
                        <Button onClick={onEdit}
                            dataTestId={'EditableProfileCard.Edit'}>
                            {t('Редактировать')}
                        </Button>
                    )
                    : (
                        <HStack gap={'8'}>
                            <Button onClick={onSave}
                                dataTestId={'EditableProfileCard.Save'}>
                                {t('Сохранить')}
                            </Button>
                            <Button onClick={onCancel}
                                theme={ButtonTheme.OUTLINE_RED}
                                dataTestId={'EditableProfileCard.Cancel'}
                            >
                                {t('Отмена')}
                            </Button>
                        </HStack>
                    )
            )}
        </HStack>
    )
}
