import {type FC, useCallback, useMemo} from 'react'
import {useTranslation} from 'react-i18next'
import {useSelector} from 'react-redux'
import {fetchArticles} from 'pages/ArticlesPage/model/services/fetchArticles'
import {ArticleViewSelector} from 'features/ArticleVewSelector'
import {ArticleSortField, type ArticleView} from 'entities/Article'
import {ArticleType} from 'entities/Article/model/types/article'
import {classNames} from 'shared/lib/classNames/classNames'
import {useAppDispatch} from 'shared/lib/hooks/useAppDispatch/useAppDispatch'
import {useDebounce} from 'shared/lib/hooks/useDebounce/useDebounce'
import {type SortOrder} from 'shared/types'
import {Card} from 'shared/ui/Card/Card'
import {Input} from 'shared/ui/Input/Input'
import {Select, type SelectOptions} from 'shared/ui/Select/Select'
import {type TabItem, Tabs} from 'shared/ui/Tabs/Tabs'
import {
    getArticlesOrder,
    getArticlesSearch,
    getArticlesSortField,
    getArticlesType,
    getArticlesView
} from '../../model/selectors/articlesPageSelector'
import {articlesPageAction} from '../../model/slice/articlesPageSlice'
import cls from './ArticlesFilter.module.scss'

interface ArticlesFilterProps {
    className?: string
}

export const ArticlesFilter: FC<ArticlesFilterProps> = (props) => {
    const {t} = useTranslation()
    const dispatch = useAppDispatch()
    const view = useSelector(getArticlesView)
    const sortOrder = useSelector(getArticlesOrder)
    const sortField = useSelector(getArticlesSortField)
    const search = useSelector(getArticlesSearch)
    const selectedType = useSelector(getArticlesType)

    const orderOption = useMemo<Array<SelectOptions<SortOrder>>>(() => {
        return [
            {value: 'asc', content: t('возростанию')},
            {value: 'desc', content: t('убыванию')}
        ]
    }, [t])

    const fieldSortOption = useMemo<Array<SelectOptions<ArticleSortField>>>(() => {
        return [
            {value: ArticleSortField.CREATED, content: t('дате создания')},
            {value: ArticleSortField.TITLE, content: t('заголовку')},
            {value: ArticleSortField.VIEWS, content: t('просмотрам')}
        ]
    }, [t])

    const fetchData = useCallback(() => {
        dispatch(articlesPageAction.setPage(1))
        dispatch(fetchArticles({replace: true}))
    }, [dispatch])

    const fetchDataDebounced = useDebounce(fetchData, 500)

    const setView = useCallback((view: ArticleView) => {
        dispatch(articlesPageAction.setView(view))
        fetchData()
    }, [dispatch, fetchData])

    const setSortOrder = useCallback((order: SortOrder) => {
        dispatch(articlesPageAction.setOrder(order))
        fetchData()
    }, [dispatch, fetchData])

    const setSortField = useCallback((field: ArticleSortField) => {
        dispatch(articlesPageAction.setSort(field))
        fetchData()
    }, [dispatch, fetchData])

    const setSearch = useCallback((search: string) => {
        dispatch(articlesPageAction.setSearch(search))
        fetchDataDebounced()
    }, [dispatch, fetchDataDebounced])

    const typeTabs = useMemo<Array<TabItem<ArticleType>>>(() => [
        {value: ArticleType.ALL, component: t('Все')},
        {value: ArticleType.IT, component: t('ИТ')},
        {value: ArticleType.ECONOMICS, component: t('Экономика')},
        {value: ArticleType.SCINCE, component: t('Наука')}
    ], [t])

    const setType = useCallback((type: TabItem<ArticleType>) => {
        dispatch(articlesPageAction.setTypes(type.value))
        fetchData()
    }, [dispatch, fetchData])

    return (
        <div className={classNames(cls.ArticlesFilter, {}, [props.className])}>
            <div className={cls.sortWrapper}>
                <div className={cls.sortWrapper}>
                    <Select<ArticleSortField>
                        label={t('Сортировать по') || ''}
                        value={sortField}
                        onChange={setSortField}
                        options={fieldSortOption}
                    />
                    <Select<SortOrder>
                        label={t(' по ') || ''}
                        value={sortOrder}
                        onChange={setSortOrder}
                        options={orderOption}
                    />
                </div>
                <ArticleViewSelector onViewSelect={setView} selectedView={view}/>
            </div>
            <Card className={cls.search}>
                <Input placeholder={t('Поиск') || ''} value={search}
                    onChange={setSearch}
                    placeholdersize={'50px'}
                />
            </Card>
            <Tabs className={cls.types}
                onTabChange={setType}
                tabs={typeTabs}
                selectedTab={selectedType}
            />
        </div>
    )
}
