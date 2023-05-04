import {type FC} from 'react'
import {useSelector} from 'react-redux'
import {getUserAuthData} from 'entities/User'
import {classNames} from 'shared/lib/classNames/classNames'
import {Skeleton} from 'shared/ui/Skeleton/Skeleton'
import {VStack} from 'shared/ui/Stack'
import {useNotifications} from '../../api/notificationAPI'
import {NotificationItem} from '../NotificationItem/NotificationItem'

interface NotificationListProps {
    className?: string
}

export const NotificationList: FC<NotificationListProps> = (props) => {
    const userData = useSelector(getUserAuthData)
    const {data, isLoading} = useNotifications(userData?.id ?? '', {
        pollingInterval: 5000
    })
    if (!userData) {
        return null
    }
    if (isLoading) {
        return (
            <VStack gap={'16'} max className={classNames('', {}, [props.className])}>
                <Skeleton width={'100%'} border={'8px'} height={'80px'}/>
            </VStack>
        )
    }

    return (
        <VStack gap={'16'} max className={classNames('', {}, [props.className])}>
            {data?.map(item => (
                <NotificationItem key={item.id} item={item}/>
            )
            )}
        </VStack>
    )
}
