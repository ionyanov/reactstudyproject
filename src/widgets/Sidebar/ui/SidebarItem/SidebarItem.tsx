import React, {type FC} from 'react'
import {useTranslation} from 'react-i18next'
import {useSelector} from 'react-redux'
import {getUserAuthData} from '@/entities/User'
import {classNames} from '@/shared/lib/classNames/classNames'
import {AppLink, AppLinkTheme} from '@/shared/ui/AppLink/AppLink'
import {type SidebarItemType} from '../../model/Item'
import cls from './SidebarItem.module.scss'

interface SidebarProps {
    item: SidebarItemType
    collapsed: boolean
}

export const SidebarItem: FC<SidebarProps> = (props) => {
    const {t} = useTranslation()

    const isAuth = useSelector(getUserAuthData)

    if (!isAuth && props.item.authOnly) { return null }

    return (
        <AppLink theme={AppLinkTheme.SECONDARY}
            to={props.item.path}
            className={classNames(cls.item, {[cls.collapsed]: props.collapsed}, [])}
        >
            {props.item.Icon && <props.item.Icon className={cls.icon}/>}
            <div className={cls.link}>{t(props.item.text)}</div>
        </AppLink>
    )
}
