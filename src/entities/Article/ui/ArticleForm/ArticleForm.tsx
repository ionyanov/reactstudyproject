import {type FC, memo, type ReactNode, useCallback} from 'react'
import {useTranslation} from 'react-i18next'
import {useSelector} from 'react-redux'
import CalendarIcon from '@/shared/assets/icons/calendar-20-20.svg'
import EyeIcon from '@/shared/assets/icons/eye-20-20.svg'
import ProfileIcon from '@/shared/assets/icons/profile-20-20.svg'
import {DynamicModuleLoader, type ReducerList} from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader'
import {useAppDispatch} from '@/shared/lib/hooks/useAppDispatch/useAppDispatch'
import {useInitialEffect} from '@/shared/lib/hooks/useInitialEffect/useInitialEffect'
import {Avatar} from '@/shared/ui/Avatar'
import {Icon} from '@/shared/ui/Icon'
import {Skeleton} from '@/shared/ui/Skeleton'
import {HStack, VStack} from '@/shared/ui/Stack'
import {Text, TextAlign, TextSize, TextTheme} from '@/shared/ui/Text'
import {
    getArticleDetailsData,
    getArticleDetailsError,
    getArticleDetailsIsLoading
} from '../../model/selectors/articaleDetails'
import {fetchArticleById} from '../../model/services/fetchArticleById'
import {articleDetailReducer} from '../../model/slice/articleDetailSlice'
import {type ArticleBloc, ArticleBlockType} from '../../model/types/article'
import {ArticleBlockCodeComponent} from '../ArticleBlockCodeComponent/ArticleBlockCodeComponent'
import {ArticleBlockImageComponent} from '../ArticleBlockImageComponent/ArticleBlockImageComponent'
import {ArticleBlockTextComponent} from '../ArticleBlockTextComponent/ArticleBlockTextComponent'

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
            return <ArticleBlockCodeComponent key={block.id} block={block}/>
        } else if (block.type === ArticleBlockType.IMAGE) {
            return <ArticleBlockImageComponent key={block.id} block={block}/>
        } else if (block.type === ArticleBlockType.TEXT) {
            return <ArticleBlockTextComponent key={block.id} block={block}/>
        } else {
            return null
        }
    }, [])

    let cotent: ReactNode
    if (isLoading) {
        cotent = (
            <VStack gap={'16'} max>
                <HStack gap={'8'} max justify={'center'}>
                    <Skeleton width={200} height={200} border={'50%'}/>
                </HStack>
                <Skeleton width={300} height={32}/>
                <Skeleton width={'90%'} height={200}/>
            </VStack>

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
            <VStack gap={'8'} max>
                <HStack gap={'4'} max justify={'center'}>
                    {article?.img
                        ? <Avatar size={200} src={article?.img}/>
                        : <ProfileIcon width={200} height={200}/>
                    }
                </HStack>
                <Text title={article?.title} text={article?.subtitle} size={TextSize.L}/>
                <VStack gap={'4'}>
                    <HStack gap={'4'}>
                        <Icon Svg={EyeIcon}/>
                        <Text text={String(article?.views) || ''}/>
                    </HStack>
                    <HStack gap={'4'}>
                        <Icon Svg={CalendarIcon}/>
                        <Text text={article?.createdAt || ''}/>
                    </HStack>
                </VStack>
                {article?.blocks.map(renderBlock)}
            </VStack>
        )
    }

    return (
        <DynamicModuleLoader reducers={reducers}>
            {cotent}
        </DynamicModuleLoader>
    )
})
