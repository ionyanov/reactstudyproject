import {
    type AnyAction,
    type CombinedState,
    configureStore,
    type Reducer,
    type ReducersMapObject,
    type ThunkDispatch
} from '@reduxjs/toolkit'
import {type To} from '@remix-run/router'
import {type NavigateOptions} from 'react-router/dist/lib/context'
import {userReducer} from 'entities/User'
import {$api} from 'shared/api/api'
import {createdReducerManager} from './reducerManager'
import {type ReduxStoreWithManager, type StateSchema} from './StateSchema'

export function createReduxStore (initialState?: StateSchema,
    asyncRedusers?: ReducersMapObject<StateSchema>,
    navigate?: (to: To, options?: NavigateOptions) => void): ReduxStoreWithManager {
    const rootReducer: ReducersMapObject<StateSchema> = {
        ...asyncRedusers,
        user: userReducer
    }

    const reducerManager = createdReducerManager(rootReducer)

    const store: ReduxStoreWithManager = configureStore({
        reducer: reducerManager.reduce as Reducer<CombinedState<StateSchema>>,
        devTools: _IS_DEV_,
        preloadedState: initialState,
        middleware: (getDefaultMiddleware) => getDefaultMiddleware({
            thunk: {
                extraArgument: {
                    api: $api,
                    navigate
                }
            }
        })
    })
    store.reducerManager = reducerManager

    return store
}

export type AppDispatch = ThunkDispatch<Reducer<CombinedState<StateSchema>>, any, AnyAction>
