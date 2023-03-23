import {type FC, memo} from 'react'
import {classNames} from 'shared/lib/classNames/classNames'
import cls from './ArticleBlockImageComponent.module.scss'
import {type ArticleBlockImage} from '../../model/types/article'
import {Text, TextAlign} from 'shared/ui/Text/Text'

interface ArticleBlockImageComponentProps {
    className?: string
    block: ArticleBlockImage
}

export const ArticleBlockImageComponent: FC<ArticleBlockImageComponentProps> = memo((props: ArticleBlockImageComponentProps) => {
    return (
        <div className={classNames(cls.ArticleBlockImageComponent, {}, [props.className])}>
            <img src={props.block.src} alt={props.block.title} className={cls.image}/>
            {props.block.title && (
                <Text text={props.block.title} align={TextAlign.CENTER}/>
            )}
        </div>
    )
})
