import {type FC, memo} from 'react'
import {useTranslation} from 'react-i18next'
import {classNames} from 'shared/lib/classNames/classNames'
import {Text} from 'shared/ui/Text/Text'
import {type MyComment} from '../../model/types/myComment'
import {CommentCard} from '../CommentCard/CommentCard'
import cls from './CommentList.module.scss'

interface CommentListProps {
    className?: string
    comments?: MyComment[]
    isLoading?: boolean
}

export const CommentList: FC<CommentListProps> = memo((props: CommentListProps) => {
    const {t} = useTranslation()

    if (props.isLoading) {
        return (
            <div className={classNames(cls.CommentList, {}, [props.className])}>
                <CommentCard data={undefined} isLoading={props.isLoading}/>
            </div>
        )
    }

    return (
        <div className={classNames(cls.CommentList, {}, [props.className])}>
            {props.comments?.length
                ? props.comments?.map(comment => (
                    <CommentCard data={comment} isLoading={props.isLoading} key={comment.id}/>
                ))
                : <Text text={t('Комментарии отсутствуют')}/>
            }
        </div>
    )
})
