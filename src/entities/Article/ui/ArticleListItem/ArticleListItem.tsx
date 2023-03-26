import {type FC, useCallback} from 'react'
import {useTranslation} from 'react-i18next'
import {useNavigate} from 'react-router-dom'
import EyeIcon from 'shared/assets/icons/eye-20-20.svg'
import {RoutePath} from 'shared/config/routeConfig/routeConfig'
import {classNames} from 'shared/lib/classNames/classNames'
import {Avatar} from 'shared/ui/Avatar/Avatar'
import {Button} from 'shared/ui/Button/Button'
import {Card} from 'shared/ui/Card/Card'
import {Icon} from 'shared/ui/Icon/Icon'
import {Text} from 'shared/ui/Text/Text'
import {type Article, type ArticleBlockText, ArticleBlockType, ArticleView} from '../../model/types/article'
import {ArticleBlockTextComponent} from '../ArticleBlockTextComponent/ArticleBlockTextComponent'
import cls from './ArticleListItem.module.scss'

interface ArticleListItemProps {
    className?: string
    article: Article
    view: ArticleView
}

export const ArticleListItem: FC<ArticleListItemProps> = (props) => {
    const {t} = useTranslation()
    const navigate = useNavigate()

    const onOpenArticle = useCallback(() => {
        navigate(RoutePath.article_details + props.article.id)
    }, [navigate, props])

    if (props.view === ArticleView.LIST) {
        const textBlock = props.article.blocks.find(
            (block) => block.type === ArticleBlockType.TEXT
        ) as ArticleBlockText

        return (
            <Card className={classNames(cls.ArticleListItem, {}, [props.className, cls[props.view]])}>
                <div className={cls.header}>
                    <Avatar size={30} src={props.article.user.avatar}/>
                    <Text text={props.article.user.username} className={cls.username}/>
                    <Text text={props.article.createdAt} className={cls.date}/>
                </div>
                <Text text={props.article.title} className={cls.title}/>
                <Text text={props.article.type.join(', ')} className={cls.types}/>
                <img src={props.article.img} alt={props.article.title} className={cls.img}/>
                {textBlock && (
                    <ArticleBlockTextComponent block={textBlock} className={cls.block}/>
                )}
                <div className={cls.footer}>
                    <Button onClick={onOpenArticle}>{t('Читать далее...')}</Button>
                    <Text text={props.article.views.toString()} className={cls.view}/>
                    <Icon Svg={EyeIcon}/>
                </div>
            </Card>
        )
    }

    return (
        <Card
            className={classNames(cls.ArticleListItem, {}, [props.className, cls[props.view]])}
            onClick={onOpenArticle}
        >
            <div className={cls.imageWrapper}>
                <img src={props.article.img} alt={props.article.title} className={cls.img}/>
                <Text text={props.article.createdAt} className={cls.date}/>
            </div>
            <div className={cls.infoWraper}>
                <Text text={props.article.type.join(', ')} className={cls.types}/>
                <Text text={props.article.views.toString()} className={cls.view}/>
                <Icon Svg={EyeIcon}/>
            </div>
            <Text text={props.article.title} className={cls.title}/>
        </Card>
    )
}
