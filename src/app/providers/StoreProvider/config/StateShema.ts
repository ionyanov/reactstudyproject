import {type UserSchema} from 'entities/User'
import {type LoginSchema} from 'features/AuthByUserName'
import {type AnyAction, type CombinedState, type EnhancedStore, type Reducer, type ReducersMapObject} from '@reduxjs/toolkit'

export interface StateShema {
    user: UserSchema
    // Async
    loginForm?: LoginSchema
}

export type StateSchemaKey = keyof StateShema

export interface ReducerManager {
    getReducerMap: () => ReducersMapObject<StateShema>
    reduce: (state: StateShema, action: AnyAction) => CombinedState<StateShema>
    add: (key: StateSchemaKey, reducer: Reducer) => void
    remove: (key: StateSchemaKey) => void
}

export interface ReduxStoreWithManager extends EnhancedStore<StateShema> {
    reducerManager?: ReducerManager
}
