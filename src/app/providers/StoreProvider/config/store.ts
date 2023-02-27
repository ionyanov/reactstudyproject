import {type CombinedState, configureStore, type Reducer, type ReducersMapObject} from '@reduxjs/toolkit'
import {type ReduxStoreWithManager, type StateShema} from './StateShema'
import {userReducer} from 'entities/User'
import {createdReducerManager} from './reducerManager'

export function createReduxStore (initialState?: StateShema, asyncRedusers?: ReducersMapObject<StateShema>): ReduxStoreWithManager {
    const rootReducer: ReducersMapObject<StateShema> = {
        ...asyncRedusers,
        user: userReducer
    }

    const reducerManager = createdReducerManager(rootReducer)

    const store: ReduxStoreWithManager = configureStore<StateShema>({
        reducer: reducerManager.reduce as Reducer<CombinedState<StateShema>>,
        devTools: _IS_DEV_,
        preloadedState: initialState
    })
    store.reducerManager = reducerManager

    return store
}
