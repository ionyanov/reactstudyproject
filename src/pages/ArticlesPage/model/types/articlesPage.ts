import {type EntityState} from '@reduxjs/toolkit'
import {type Article, type ArticleSortField, type ArticleType, type ArticleView} from '@/entities/Article'
import {type SortOrder} from '@/shared/types'

export interface ArticlesPageSchema extends EntityState<Article> {
    isLoading?: boolean
    error?: string
    // filters
    view: ArticleView
    order: SortOrder
    sortField: ArticleSortField
    search: string
    types: ArticleType
    // pagination
    page: number
    limit: number
    hasMore: boolean

    _inited: boolean
}
