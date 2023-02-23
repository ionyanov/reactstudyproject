import {configureStore, type ReducersMapObject} from '@reduxjs/toolkit'
import {type StateShema} from './StateShema'
import {userReducer} from 'entities/User'
import {loginReducer} from 'features/AuthByUserName'

export function createReduxStore (initialState?: StateShema): ReturnType<typeof configureStore<StateShema>> {
    const rootReducer: ReducersMapObject<StateShema> = {
        user: userReducer,
        loginForm: loginReducer
    }

    return configureStore<StateShema>({
        reducer: rootReducer,
        devTools: _IS_DEV_,
        preloadedState: initialState
    })
}
