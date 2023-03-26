import {type FC, memo} from 'react'
import {type ArticleBlockCode} from 'entities/Article/model/types/article'
import {classNames} from 'shared/lib/classNames/classNames'
import {Code} from 'shared/ui/Code/Code'
import cls from './ArticleBlockCodeComponent.module.scss'

interface ArticleBlockCodeComponentProps {
    className?: string
    block: ArticleBlockCode
}

export const ArticleBlockCodeComponent: FC<ArticleBlockCodeComponentProps> = memo((props: ArticleBlockCodeComponentProps) => {
    return (
        <div className={classNames(cls.ArticleBlockCodeComponent, {}, [props.className])}>
            <Code text={props.block.code}/>
        </div>
    )
})
