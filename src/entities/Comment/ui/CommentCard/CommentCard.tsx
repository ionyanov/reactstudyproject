import {type FC} from 'react'
import {classNames} from 'shared/lib/classNames/classNames'
import cls from './CommentCard.module.scss'
import {type MyComment} from 'entities/Comment'
import {Avatar} from 'shared/ui/Avatar/Avatar'
import {Text} from 'shared/ui/Text/Text'
import {Skeleton} from 'shared/ui/Skeleton/Skeleton'
import AvatarImg from 'shared/assets/test/avatar.jpg'
import {AppLink} from 'shared/ui/AppLink/AppLink'
import {RoutePath} from 'shared/config/routeConfig/routeConfig'

interface CommentCardProps {
    className?: string
    data?: MyComment
    isLoading?: boolean
}

export const CommentCard: FC<CommentCardProps> = (props) => {
    if (props.isLoading) {
        return (
            <div className={classNames(cls.CommentCard, {}, [props.className])}>
                <div className={cls.header}>
                    <Skeleton border={'50%'} width={30} height={30}/>
                    <Skeleton className={cls.username} width={100} height={16}/>
                </div>
                <Skeleton className={cls.body} width={'100%'} height={16}/>
            </div>
        )
    }

    return (
        <div className={classNames(cls.CommentCard, {}, [props.className])}>
            <AppLink className={cls.header} to={`${RoutePath.profile}${props.data?.user.id || ''}`}>
                {props.data?.user.avatar
                    ? <Avatar src={props.data?.user.avatar} size={30}/>
                    : <Avatar src={AvatarImg} size={30}/>
                }
                <Text className={cls.username} title={props.data?.user.username}/>
            </AppLink>
            <Text className={cls.body} text={props.data?.text}/>
        </div>
    )
}
