import React, {type FC} from 'react'
import {NotificationList} from 'entities/Notification'
import Notification from 'shared/assets/icons/notification-20-20.svg'
import {Button, ButtonTheme} from 'shared/ui/Button/Button'
import {Icon} from 'shared/ui/Icon/Icon'
import {Popover} from 'shared/ui/Popups'
import cls from './NotificationButton.module.scss'

interface NotificationButtonProps {
    className?: string
}

export const NotificationButton: FC<NotificationButtonProps> = (props) => {
    return (
        <Popover
            className={props.className}
            direction={'bottom left'}
            trigger={(
                <Button theme={ButtonTheme.CLEAR}>
                    <Icon Svg={Notification} inverted/>
                </Button>
            )}
        >
            <NotificationList className={cls.notification}/>
        </Popover>
    )
}
