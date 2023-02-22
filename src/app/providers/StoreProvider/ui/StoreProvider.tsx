import {type FC, type ReactNode} from 'react'
import {Provider} from 'react-redux'
import {createReduxStore} from '../config/store'
import {type StateShema} from '../config/StateShema'
import {DeepPartial} from "@reduxjs/toolkit";

interface StoreProviderProps {
    children: ReactNode
    initialState?: DeepPartial<StateShema>
}

export const StoreProvider: FC<StoreProviderProps> = (props) => {
    const store = createReduxStore(props.initialState as StateShema)

    return (
        <Provider store={store}>
            {props.children}
        </Provider>
    )
}
