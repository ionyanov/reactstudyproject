import {
    type AnyAction,
    type CombinedState,
    configureStore,
    type Reducer,
    type ReducersMapObject,
    type ThunkDispatch
} from '@reduxjs/toolkit'
import {pageReducer} from 'widgets/Page'
import {userReducer} from 'entities/User'
import {$api} from 'shared/api/api'
import {createdReducerManager} from './reducerManager'
import {type ReduxStoreWithManager, type StateSchema} from './StateSchema'

export function createReduxStore (initialState?: StateSchema,
    asyncRedusers?: ReducersMapObject<StateSchema>): ReduxStoreWithManager {
    const rootReducer: ReducersMapObject<StateSchema> = {
        ...asyncRedusers,
        user: userReducer,
        page: pageReducer
    }

    const reducerManager = createdReducerManager(rootReducer)

    const store: ReduxStoreWithManager = configureStore({
        reducer: reducerManager.reduce as Reducer<CombinedState<StateSchema>>,
        devTools: _IS_DEV_,
        preloadedState: initialState,
        middleware: (getDefaultMiddleware) => getDefaultMiddleware({
            thunk: {
                extraArgument: {
                    api: $api
                }
            }
        })
    })
    store.reducerManager = reducerManager

    return store
}

export type AppDispatch = ThunkDispatch<Reducer<CombinedState<StateSchema>>, any, AnyAction>
