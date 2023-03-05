import {type UserSchema} from 'entities/User'
import {type LoginSchema} from 'features/AuthByUserName'
import {
    type AnyAction,
    type CombinedState,
    type EnhancedStore,
    type Reducer,
    type ReducersMapObject
} from '@reduxjs/toolkit'
import {type ProfileSchema} from 'entities/Profile'
import {type AxiosInstance} from 'axios'
import {type To} from '@remix-run/router'
import {type NavigateOptions} from 'react-router/dist/lib/context'

export interface StateSchema {
    user: UserSchema
    // Async
    loginForm?: LoginSchema
    profile?: ProfileSchema
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

export interface ThunkExpraArgs {
    api: AxiosInstance
    navigate: (to: To, options?: NavigateOptions) => void
}

export interface ThunkConfig<T> {
    rejectValue: T
    extra: ThunkExpraArgs
}