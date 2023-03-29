import {createSelector} from '@reduxjs/toolkit'
import {getArticleDetailsData} from 'entities/Article'
import {getUserAuthData} from 'entities/User'
import {type StateSchema} from 'shared/lib/providers/StoreProvider'

export const getCanEditArticle: (state: StateSchema) => boolean = createSelector(
    getUserAuthData,
    getArticleDetailsData,
    (user, article) => {
        if (!article || !user) {
            return false
        }
        return user.id === article.user.id
    }
)
