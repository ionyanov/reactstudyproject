import {type FC, memo, type ReactNode, useCallback} from 'react'
import {useSelector} from 'react-redux'
import {classNames} from 'shared/lib/classNames/classNames'
import cls from './ArticleForm.module.scss'
import {useTranslation} from 'react-i18next'
import {DynamicModuleLoader, type ReducerList} from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader'
import {useAppDispatch} from 'shared/lib/hooks/useAppDispatch/useAppDispatch'
import {articleDetailReducer} from '../../model/slice/articleDetailSlice'
import {fetchArticleById} from '../../model/services/fetchArticleById'
import {
    getArticleDetailsData,
    getArticleDetailsError,
    getArticleDetailsIsLoading
} from '../../model/selectors/articaleDetails'
import {type ArticleBloc, ArticleBlockType} from '../../model/types/article'
import {Text, TextAlign, TextSize, TextTheme} from 'shared/ui/Text/Text'
import {Skeleton} from 'shared/ui/Skeleton/Skeleton'
import {Avatar} from 'shared/ui/Avatar/Avatar'
import {Icon} from 'shared/ui/Icon/Icon'
import ProfileIcon from 'shared/assets/icons/profile-20-20.svg'
import EyeIcon from 'shared/assets/icons/eye-20-20.svg'
import CalendarIcon from 'shared/assets/icons/calendar-20-20.svg'
import {ArticleBlockTextComponent} from '../ArticleBlockTextComponent/ArticleBlockTextComponent'
import {ArticleBlockImageComponent} from '../ArticleBlockImageComponent/ArticleBlockImageComponent'
import {ArticleBlockCodeComponent} from '../ArticleBlockCodeComponent/ArticleBlockCodeComponent'
import {useInitialEffect} from 'shared/lib/hooks/useInitialEffect/useInitialEffect'

interface ArticleFormProps {
    className?: string
    id: string
}

const reducers: ReducerList = {
    articleDetail: articleDetailReducer
}

export const ArticleForm: FC<ArticleFormProps> = memo((props: ArticleFormProps) => {
    const {id} = props

    const dispatch = useAppDispatch()
    const {t} = useTranslation()
    const isLoading = useSelector(getArticleDetailsIsLoading)
    const article = useSelector(getArticleDetailsData)
    const error = useSelector(getArticleDetailsError)

    useInitialEffect(() => {
        if (!isLoading) {
            dispatch(fetchArticleById(id))
        }
    })

    const renderBlock = useCallback((block: ArticleBloc): ReactNode => {
        if (block.type === ArticleBlockType.CODE) {
            return <ArticleBlockCodeComponent key={block.id} block={block} className={cls.block}/>
        } else if (block.type === ArticleBlockType.IMAGE) {
            return <ArticleBlockImageComponent key={block.id} block={block} className={cls.block}/>
        } else if (block.type === ArticleBlockType.TEXT) {
            return <ArticleBlockTextComponent key={block.id} block={block} className={cls.block}/>
        } else {
            return null
        }
    }, [])

    let cotent: ReactNode
    if (isLoading) {
        cotent = (
            <div>
                <Skeleton className={cls.avatar} width={200} height={200} border={'50%'}/>
                <Skeleton className={cls.title} width={300} height={32}/>
                <Skeleton className={cls.skeleton} width={'90%'} height={200}/>
            </div>

        )
    } else if (error) {
        cotent = (
            <Text
                theme={TextTheme.ERROR}
                align={TextAlign.CENTER}
                text={t('Произошла ошибка при загрузке статьи') || ''}
            />
        )
    } else {
        cotent = (
            <>
                <div className={cls.avatarWrapper}>
                    {article?.img
                        ? <Avatar className={cls.avatar} size={200} src={article?.img}/>
                        : <ProfileIcon className={cls.avatar} width={200} height={200}/>
                    }
                </div>
                <Text className={cls.title} title={article?.title} text={article?.subtitle} size={TextSize.L}/>
                <div className={cls.articleInfo}>
                    <Icon Svg={EyeIcon} className={cls.icon}/>
                    <Text text={String(article?.views) || ''}/>
                </div>
                <div className={cls.articleInfo}>
                    <Icon Svg={CalendarIcon} className={cls.icon}/>
                    <Text text={article?.createdAt || ''}/>
                </div>
                {article?.blocks.map(renderBlock)}
            </>
        )
    }

    return (
        <DynamicModuleLoader reducers={reducers}>
            <div className={classNames(cls.ArticleForm, {}, [props.className])}>
                {cotent}
            </div>
        </DynamicModuleLoader>
    )
})
