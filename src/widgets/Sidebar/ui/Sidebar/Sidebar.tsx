import React, {type FC, useEffect, useMemo, useState} from 'react'
import {useSelector} from 'react-redux'
import {LangSwitcher} from 'features/LangSwitcher'
import {ThemeSwitcher} from 'features/ThemeSwitcher'
import {LOCALSTORAGE_SIDEBAR_KEY} from 'shared/const/localstorage'
import {classNames} from 'shared/lib/classNames/classNames'
import {Button, ButtonSize, ButtonTheme} from 'shared/ui/Button/Button'
import {VStack} from 'shared/ui/Stack'
import {getSidebarItems} from '../../model/getSidebarItems'
import {SidebarItem} from '../SidebarItem/SidebarItem'
import cls from './Sidebar.module.scss'

interface SidebarProps {
    className?: string
}

const defaultState: boolean = JSON.parse(localStorage.getItem(LOCALSTORAGE_SIDEBAR_KEY) || 'false') || false

export const Sidebar: FC<SidebarProps> = props => {
    const [collapsed, setCollapsed] = useState(defaultState)

    const onToggle = (): void => {
        setCollapsed(prev => !prev)
    }

    const sidebarItemList = useSelector(getSidebarItems)
    const itemList = useMemo(() => sidebarItemList.map((item) =>
        <SidebarItem
            item={item}
            key={item.path}
            collapsed={collapsed}/>
    ), [collapsed, sidebarItemList])

    useEffect(() => {
        localStorage.setItem(LOCALSTORAGE_SIDEBAR_KEY, JSON.stringify(collapsed))
    }, [collapsed])

    return (
        <aside data-testid="sidebar"
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
            <VStack gap={'8'} className={cls.items} role={'navigation'}>
                {itemList}
            </VStack>
            <div className={cls.switchers}>
                <ThemeSwitcher/>
                <LangSwitcher short={collapsed}/>
            </div>
        </aside>
    )
}
