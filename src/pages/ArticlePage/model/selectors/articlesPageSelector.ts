import {type StateSchema} from 'app/providers/StoreProvider'
import {ArticleView} from 'entities/Article'

export const getArticlesError: (state: StateSchema) => string | undefined = (state: StateSchema) => {
    return state?.articlesAdapter?.error
}

export const getArticlesIsLoading: (state: StateSchema) => boolean | undefined = (state: StateSchema) => {
    return state?.articlesAdapter?.isLoading
}

export const getArticlesView: (state: StateSchema) => ArticleView = (state: StateSchema) => {
    return state?.articlesAdapter?.view || ArticleView.GRID
}

export const getArticlesLimit: (state: StateSchema) => number = (state: StateSchema) => {
    return state?.articlesAdapter?.limit || 2
}

export const getArticlesPage: (state: StateSchema) => number = (state: StateSchema) => {
    return state?.articlesAdapter?.page || 1
}

export const getArticlesHasMore: (state: StateSchema) => boolean | undefined = (state: StateSchema) => {
    return state?.articlesAdapter?.hasMore
}
