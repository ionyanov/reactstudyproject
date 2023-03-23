import {type StateSchema} from 'app/providers/StoreProvider'
import {type Article} from '../types/article'

export const getArticleDetailsData: (state: StateSchema) => Article | undefined = (state: StateSchema) => {
    return state?.articleDetail?.data
}

export const getArticleDetailsError: (state: StateSchema) => string = (state: StateSchema) => {
    return state?.articleDetail?.error || ''
}

export const getArticleDetailsIsLoading: (state: StateSchema) => boolean = (state: StateSchema) => {
    return state?.articleDetail?.isLoading || false
}
