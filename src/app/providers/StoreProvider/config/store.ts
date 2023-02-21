import {configureStore} from '@reduxjs/toolkit'
import {StateShema} from "./StateShema";

export function createReduxStore(initialState?: StateShema) {
    return configureStore<StateShema>({
        reducer: {},
        devTools: _IS_DEV_,
        preloadedState: initialState
    })
}