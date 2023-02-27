import {type FC, type ReactNode} from 'react'
import {Provider} from 'react-redux'
import {createReduxStore} from '../config/store'
import {type StateShema} from '../config/StateShema'
import {type ReducersMapObject} from '@reduxjs/toolkit'

interface StoreProviderProps {
    children?: ReactNode
    initialState?: DeepPartial<StateShema>
    asyncRedusers?: DeepPartial<ReducersMapObject<StateShema>>
}

export const StoreProvider: FC<StoreProviderProps> = (props) => {
    const store = createReduxStore(props.initialState as StateShema,
        props.asyncRedusers as ReducersMapObject<StateShema>)

    return (
        <Provider store={store}>
            {props.children}
        </Provider>
    )
}
