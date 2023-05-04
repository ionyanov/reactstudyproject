import React, {type FC, useCallback} from 'react'
import {useTranslation} from 'react-i18next'
import {useSelector} from 'react-redux'
import {getUserAdmin, getUserAuthData, userActions} from '@/entities/User'
import {RoutePath} from '@/shared/config/routeConfig/routeConfig'
import {classNames} from '@/shared/lib/classNames/classNames'
import {useAppDispatch} from '@/shared/lib/hooks/useAppDispatch/useAppDispatch'
import {Avatar} from '@/shared/ui/Avatar/Avatar'
import {DropDown} from '@/shared/ui/Popups'

interface AvatarButtonProps {
    className?: string
}

export const AvatarButton: FC<AvatarButtonProps> = (props) => {
    const {t} = useTranslation()
    const dispatch = useAppDispatch()
    const authData = useSelector(getUserAuthData)
    const isAdmin = useSelector(getUserAdmin)

    const onLogout = useCallback(() => {
        dispatch(userActions.logout())
    }, [dispatch])

    if (!authData) {
        return null
    }
    return (
        <DropDown
            className={classNames('', {}, [props.className])}
            direction={'bottom left'}
            trigger={<Avatar src={authData.avatar} size={30}/>}
            items={[
                ...(isAdmin
                    ? [{
                        content: t('Администрирование'),
                        href: RoutePath.admin_panel
                    }]
                    : []),
                {content: t('Профиль'), href: RoutePath.profile + authData.id},
                {content: t('Выйти'), onClick: onLogout}
            ]}
        />
    )
}
