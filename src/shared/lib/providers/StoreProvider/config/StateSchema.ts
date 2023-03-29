import {
    type AnyAction,
    type CombinedState,
    type EnhancedStore,
    type Reducer,
    type ReducersMapObject
} from '@reduxjs/toolkit'
import {type AxiosInstance} from 'axios'
import {type ArticlesPageSchema} from 'pages/ArticlesPage'
import {type PageSchema} from 'widgets/Page'
import {type AddCommentCardSchema} from 'features/AddCommentCard'
import {type ArticleCommentListSchema} from 'features/ArticleCommentList'
import {type ArticleRecommendationSchema} from 'features/ArticleRecommendation'
import {type LoginSchema} from 'features/AuthByUserName'
import {type ArticleDetailsSchema} from 'entities/Article'
import {type ProfileSchema} from 'entities/Profile'
import {type UserSchema} from 'entities/User'

export interface StateSchema {
    user: UserSchema
    page: PageSchema
    // Async
    loginForm?: LoginSchema
    profile?: ProfileSchema
    articleDetail?: ArticleDetailsSchema
    articleCommentList?: ArticleCommentListSchema
    addArticleComment?: AddCommentCardSchema
    articlesAdapter?: ArticlesPageSchema
    articleRecommendation?: ArticleRecommendationSchema
}

export type StateSchemaKey = keyof StateSchema

export interface ReducerManager {
    getReducerMap: () => ReducersMapObject<StateSchema>
    reduce: (state: StateSchema, action: AnyAction) => CombinedState<StateSchema>
    add: (key: StateSchemaKey, reducer: Reducer) => void
    remove: (key: StateSchemaKey) => void
}

export interface ReduxStoreWithManager extends EnhancedStore<StateSchema> {
    reducerManager?: ReducerManager
}

export interface ThunkExtraArgs {
    api: AxiosInstance
}

export interface ThunkConfig<T> {
    rejectValue: T
    extra: ThunkExtraArgs
}
