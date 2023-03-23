import {type StateSchema} from 'app/providers/StoreProvider'

export const getAddCommentCardText: (state: StateSchema) => string = (state: StateSchema) => {
    return state.addArticleComment?.text || ''
}

export const getAddCommentCardError: (state: StateSchema) => string | undefined = (state: StateSchema) => {
    return state.addArticleComment?.error
}
