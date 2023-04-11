import {type ReactNode, useCallback} from 'react'
import {classNames} from '../../lib/classNames/classNames'
import {Card, CardTheme} from '../Card/Card'
import cls from './Tabs.module.scss'

export interface TabItem<T extends string> {
    value: T
    component: ReactNode
}

interface TabsProps<T extends string> {
    className?: string
    tabs: Array<TabItem<T>>
    selectedTab: string
    onTabChange: (tab: TabItem<T>) => void
}

export const Tabs: <T extends string>(props: TabsProps<T>) => JSX.Element = <T extends string>(props: TabsProps<T>) => {
    const clickHandler = useCallback((tab: TabItem<T>) => {
        return () => {
            if (props.onTabChange) { props.onTabChange(tab) }
        }
    }, [props])

    return (
        <div className={classNames(cls.Tabs, {}, [props.className])}>
            {props.tabs.map(item => (
                <Card className={cls.tab}
                    key={item.value}
                    theme={props.selectedTab === item.value ? CardTheme.NORMAL : CardTheme.OUTLINE}
                    onClick={clickHandler(item)}
                >{item.component}</Card>
            ))}
        </div>
    )
}
