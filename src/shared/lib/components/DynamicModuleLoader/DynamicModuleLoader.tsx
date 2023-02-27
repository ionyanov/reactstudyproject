import {type FC, type HTMLAttributes, useEffect} from 'react'
import {useDispatch, useStore} from 'react-redux'
import {type Reducer} from '@reduxjs/toolkit'
import {type ReduxStoreWithManager} from 'app/providers/StoreProvider'
import {type StateSchemaKey} from 'app/providers/StoreProvider/config/StateShema'

export type ReducerList = {
    [name in StateSchemaKey]?: Reducer;
}

interface DynamicModuleLoaderProps extends HTMLAttributes<HTMLElement> {
    reducers: ReducerList
    removeAfterUnmount?: boolean
}

export const DynamicModuleLoader: FC<DynamicModuleLoaderProps> = (props) => {
    const store = useStore() as ReduxStoreWithManager
    const dispatch = useDispatch()

    useEffect(() => {
        Object.entries(props.reducers).forEach(([name, reducer]) => {
            dispatch({type: `@INIT ${name} reducer`})
            store.reducerManager!.add(name as StateSchemaKey, reducer)
        })

        return () => {
            if (props.removeAfterUnmount || false) {
                Object.entries(props.reducers).forEach(([name, reducer]) => {
                    store.reducerManager!.remove(name as StateSchemaKey)
                    dispatch({type: `@DESTROY ${name} reducer`})
                })
            }
        }
    }, [dispatch, props.reducers, props.removeAfterUnmount, store.reducerManager])

    return (
        <>
            {props.children}
        </>
    )
}
