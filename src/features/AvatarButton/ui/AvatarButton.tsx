import React, {type FC, useCallback} from 'react'
import {useTranslation} from 'react-i18next'
import {useSelector} from 'react-redux'
import {getUserAdmin, getUserAuthData, userActions} from '@/entities/User'
import {getRouteAdmin, getRouteProfile} from '@/shared/const/router'
import {classNames} from '@/shared/lib/classNames/classNames'
import {useAppDispatch} from '@/shared/lib/hooks/useAppDispatch/useAppDispatch'
import {Avatar} from '@/shared/ui/Avatar'
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
            trigger={<Avatar src={authData.avatar} size={30} invertedColor/>}
            items={[
                ...(isAdmin
                    ? [{
                        content: t('Администрирование'),
                        href: getRouteAdmin()
                    }]
                    : []),
                {content: t('Профиль'), href: getRouteProfile(authData.id)},
                {content: t('Выйти'), onClick: onLogout}
            ]}
        />
    )
}
