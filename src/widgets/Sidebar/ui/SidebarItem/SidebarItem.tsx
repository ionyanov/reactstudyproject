import React, {type FC} from 'react'
import {useTranslation} from 'react-i18next'
import {AppLink, AppLinkTheme} from 'shared/ui/AppLink/AppLink'
import {type SidebarItemType} from '../../model/Item'
import cls from './SidebarItem.module.scss'
import {classNames} from 'shared/lib/classNames/classNames'

interface SidebarProps {
    item: SidebarItemType
    collapsed: boolean
}

export const SidebarItem: FC<SidebarProps> = (props) => {
    const {t} = useTranslation()

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
