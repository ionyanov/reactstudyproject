import {type FC, memo} from 'react'
import {classNames} from 'shared/lib/classNames/classNames'
import cls from './ArticleBlockTextComponent.module.scss'
import {type ArticleBlockText} from '../../model/types/article'
import {Text} from 'shared/ui/Text/Text'

interface ArticleBlockTextComponentProps {
    className?: string
    block: ArticleBlockText
}

export const ArticleBlockTextComponent: FC<ArticleBlockTextComponentProps> = memo((props: ArticleBlockTextComponentProps) => {
    return (
        <div className={classNames(cls.ArticleBlockTextComponent, {}, [props.className])}>
            {props.block.title && (
                <Text title={props.block.title} className={cls.title}/>
            )}
            {props.block.paragraphs.map(item => (
                <Text text={item} className={cls.paragraph} key={item}/>
            ))}
        </div>
    )
})
