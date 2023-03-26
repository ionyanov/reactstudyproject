import {type Reducer} from '@reduxjs/toolkit'
import {type FC, type HTMLAttributes, useEffect} from 'react'
import {useStore} from 'react-redux'
import {useAppDispatch} from 'shared/lib/hooks/useAppDispatch/useAppDispatch'
import {type ReduxStoreWithManager} from 'shared/lib/providers/StoreProvider'
import {type StateSchemaKey} from 'shared/lib/providers/StoreProvider/config/StateSchema'

export type ReducerList = {
    [name in StateSchemaKey]?: Reducer;
}

interface DynamicModuleLoaderProps extends HTMLAttributes<HTMLElement> {
    reducers: ReducerList
    removeAfterUnmount?: boolean
}

export const DynamicModuleLoader: FC<DynamicModuleLoaderProps> = (props) => {
    const {
        removeAfterUnmount = true,
        reducers
    } = props

    const store = useStore() as ReduxStoreWithManager
    const dispatch = useAppDispatch()

    useEffect(() => {
        Object.entries(reducers).forEach(([name, reducer]) => {
            store.reducerManager!.add(name as StateSchemaKey, reducer)
            dispatch({type: `@INIT ${name} reducer`})
        })

        return () => {
            if (removeAfterUnmount) {
                Object.entries(reducers).forEach(([name, reducer]) => {
                    // dispatch({type: `@DESTROY ${name} reducer`})
                    store.reducerManager!.remove(name as StateSchemaKey)
                })
            }
        }
    }, [dispatch, reducers, removeAfterUnmount, store.reducerManager])

    return (
        <>
            {props.children}
        </>
    )
}
