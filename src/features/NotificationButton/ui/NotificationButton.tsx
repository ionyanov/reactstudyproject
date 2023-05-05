import React, {type FC, useCallback, useState} from 'react'
import {NotificationList} from '@/entities/Notification'
import Notification from '@/shared/assets/icons/notification-20-20.svg'
import {detectMobileDevice} from '@/shared/lib/detectDevice/detectMobileDevice'
import {Button, ButtonTheme} from '@/shared/ui/Button/Button'
import {Drawer} from '@/shared/ui/Drawer/Drawer'
import {Icon} from '@/shared/ui/Icon/Icon'
import {Popover} from '@/shared/ui/Popups'
import cls from './NotificationButton.module.scss'

interface NotificationButtonProps {
    className?: string
}

export const NotificationButton: FC<NotificationButtonProps> = (props) => {
    const [isDrawerOpen, setDrawerOpen] = useState(false)

    const onOpenDrawer = useCallback(() => {
        setDrawerOpen(true)
    }, [])

    const onCloseDrawer = useCallback(() => {
        setDrawerOpen(false)
    }, [])

    const trigger = (
        <Button onClick={onOpenDrawer} theme={ButtonTheme.CLEAR}>
            <Icon Svg={Notification} inverted/>
        </Button>
    )

    if (detectMobileDevice()) {
        return (
            <>
                {trigger}
                <Drawer
                    isOpen={isDrawerOpen}
                    onClose={onCloseDrawer}
                >
                    <NotificationList/>
                </Drawer>
            </>
        )
    }

    return (
        <Popover
            className={props.className}
            direction={'bottom left'}
            trigger={trigger}
        >
            <NotificationList className={cls.notification}/>
        </Popover>
    )
}
