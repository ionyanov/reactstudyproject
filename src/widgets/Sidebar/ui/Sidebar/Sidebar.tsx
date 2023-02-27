import React, {type FC, useEffect, useState} from 'react'
import {classNames} from 'shared/lib/classNames/classNames'
import cls from './Sidebar.module.scss'
import {Button, ButtonSize, ButtonTheme} from 'shared/ui/Button/Button'
import {ThemeSwitcher} from 'widgets/ThemeSwitcher'
import {useTranslation} from 'react-i18next'
import {LangSwitcher} from 'widgets/LangSwitcher'
import {AppLink, AppLinkTheme} from 'shared/ui/AppLink/AppLink'
import {RoutePath} from 'shared/config/routeConfig/routeConfig'
import MainIcon from 'shared/assets/icons/main-page.svg'
import AboutIcon from 'shared/assets/icons/about-page.svg'
import {SIDEBAR_LOCALSTORAGE_KEY} from 'shared/const/localstorage'

interface SidebarProps {
    className?: string
}

const defaultState: boolean = JSON.parse(localStorage.getItem(SIDEBAR_LOCALSTORAGE_KEY) || 'false') || false

export const Sidebar: FC<SidebarProps> = props => {
    const [collapsed, setCollapsed] = useState(defaultState)
    const {t} = useTranslation()

    const onToggle = (): void => {
        setCollapsed(prev => !prev)
    }

    useEffect(() => {
        localStorage.setItem(SIDEBAR_LOCALSTORAGE_KEY, JSON.stringify(collapsed))
    }, [collapsed])

    return (
        <div data-testid="sidebar"
             className={classNames(cls.sidebar, {[cls.collapsed]: collapsed}, [props.className])}>
            <Button data-testid="sidebar-toggle"
                    onClick={onToggle}
                    className={cls.collapsedBtn}
                    theme={ButtonTheme.BACKGROUND_INVERTED}
                    square={true}
                    size={ButtonSize.XL}
            >
                {collapsed ? '>' : '<'}
            </Button>
            <div className={cls.items}>
                <AppLink theme={AppLinkTheme.SECONDARY}
                         to={RoutePath.main}
                         className={cls.item}
                >
                    <MainIcon className={cls.icon}/>
                    <div className={cls.link}>{t('Main')}</div>
                </AppLink>
                <AppLink theme={AppLinkTheme.SECONDARY}
                         to={RoutePath.about}
                         className={cls.item}
                >
                    <AboutIcon className={cls.icon}/>
                    <div className={cls.link}>{t('About')}</div>
                </AppLink>
            </div>
            <div className={cls.switchers}>
                <ThemeSwitcher/>
                <LangSwitcher short={collapsed}/>
            </div>
        </div>
    )
}
