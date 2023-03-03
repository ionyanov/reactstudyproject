import {type CombinedState, configureStore, type Reducer, type ReducersMapObject} from '@reduxjs/toolkit'
import {type ReduxStoreWithManager, type StateSchema} from './StateSchema'
import {userReducer} from 'entities/User'
import {createdReducerManager} from './reducerManager'

export function createReduxStore (initialState?: StateSchema, asyncRedusers?: ReducersMapObject<StateSchema>): ReduxStoreWithManager {
    const rootReducer: ReducersMapObject<StateSchema> = {
        ...asyncRedusers,
        user: userReducer
    }

    const reducerManager = createdReducerManager(rootReducer)

    const store: ReduxStoreWithManager = configureStore<StateSchema>({
        reducer: reducerManager.reduce as Reducer<CombinedState<StateSchema>>,
        devTools: _IS_DEV_,
        preloadedState: initialState
    })
    store.reducerManager = reducerManager

    return store
}

export type AppDispatch = ReturnType<typeof createReduxStore>['dispatch']
