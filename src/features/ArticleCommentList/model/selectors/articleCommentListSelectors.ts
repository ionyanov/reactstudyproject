import {type StateSchema} from 'app/providers/StoreProvider'

export const getArticleCommentListError: (state: StateSchema) => string | undefined = (state: StateSchema) => {
    return state?.articleCommentList?.error
}

export const getArticleCommentListIsLoading: (state: StateSchema) => boolean | undefined = (state: StateSchema) => {
    return state?.articleCommentList?.isLoading
}
