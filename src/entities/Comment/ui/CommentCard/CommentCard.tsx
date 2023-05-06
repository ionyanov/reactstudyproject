import {type FC} from 'react'
import AvatarImg from '@/shared/assets/test/avatar.jpg'
import {RoutePath} from '@/shared/const/router'
import {classNames} from '@/shared/lib/classNames/classNames'
import {AppLink} from '@/shared/ui/AppLink'
import {Avatar} from '@/shared/ui/Avatar'
import {Skeleton} from '@/shared/ui/Skeleton'
import {HStack, VStack} from '@/shared/ui/Stack'
import {Text} from '@/shared/ui/Text'
import {type MyComment} from '../../model/types/myComment'
import cls from './CommentCard.module.scss'

interface CommentCardProps {
    className?: string
    data?: MyComment
    isLoading?: boolean
}

export const CommentCard: FC<CommentCardProps> = (props) => {
    if (props.isLoading) {
        return (
            <VStack gap={'8'} max className={classNames(cls.CommentCard, {}, [props.className])}>
                <HStack gap={'8'}>
                    <Skeleton border={'50%'} width={30} height={30}/>
                    <Skeleton className={cls.username} width={100} height={16}/>
                </HStack>
                <Skeleton className={cls.body} width={'100%'} height={16}/>
            </VStack>
        )
    }

    return (
        <VStack gap={'8'} max className={classNames(cls.CommentCard, {}, [props.className])}>
            <AppLink className={cls.header} to={`${RoutePath.profile}${props.data?.user.id || ''}`}>
                <HStack gap={'8'}>
                    {props.data?.user.avatar
                        ? <Avatar src={props.data?.user.avatar} size={30}/>
                        : <Avatar src={AvatarImg} size={30}/>
                    }
                    <Text className={cls.username} title={props.data?.user.username}/>
                </HStack>
            </AppLink>
            <Text className={cls.body} text={props.data?.text}/>
        </VStack>
    )
}
