import {type FC} from 'react'
import {classNames} from '@/shared/lib/classNames/classNames'
import {AppLink} from '@/shared/ui/AppLink'
import {Card, CardTheme} from '@/shared/ui/Card'
import {Text} from '@/shared/ui/Text'
import {type Notification} from '../../model/types'
import cls from './NotificationItem.module.scss'

interface NotificationItemProps {
    className?: string
    item: Notification
}

export const NotificationItem: FC<NotificationItemProps> = (props) => {
    const content = (
        <Card theme={CardTheme.OUTLINE}
            className={classNames(cls.NotificationItem, {}, [props.className])}
        >
            <Text title={props.item.title} text={props.item.description}/>
        </Card>
    )

    if (props.item.href) {
        return (
            <AppLink to={props.item.href} className={cls.link}>
                {content}
            </AppLink>
        )
    }
    return content
}
