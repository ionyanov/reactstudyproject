import {type FC, type ReactNode} from 'react'
import {Provider} from 'react-redux'
import {createReduxStore} from '../config/store'
import {type StateSchema} from '../config/StateSchema'
import {type ReducersMapObject} from '@reduxjs/toolkit'
import {useNavigate} from 'react-router-dom'

interface StoreProviderProps {
    children?: ReactNode
    initialState?: DeepPartial<StateSchema>
    asyncRedusers?: DeepPartial<ReducersMapObject<StateSchema>>
}

export const StoreProvider: FC<StoreProviderProps> = (props) => {
    const navigate = useNavigate()

    const store = createReduxStore(
        props.initialState as StateSchema,
        props.asyncRedusers as ReducersMapObject<StateSchema>,
        navigate
    )

    return (
        <Provider store={store}>
            {props.children}
        </Provider>
    )
}
