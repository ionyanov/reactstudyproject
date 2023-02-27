import {type AnyAction, type CombinedState, combineReducers, type Reducer, type ReducersMapObject} from '@reduxjs/toolkit'
import {type ReducerManager, type StateSchemaKey, type StateShema} from './StateShema'

export function createdReducerManager (initialReducers: ReducersMapObject<StateShema>): ReducerManager {
    const reducers = {...initialReducers}
    let combinedReducer = combineReducers(reducers)

    let keysToRemove: StateSchemaKey[] = []

    return {
        getReducerMap: () => reducers,

        reduce: (state: StateShema, action: AnyAction): CombinedState<StateShema> => {
            if (keysToRemove.length > 0) {
                state = {...state}
                keysToRemove.forEach(key => {
                    delete state[key]
                })
                keysToRemove = []
            }
            return combinedReducer(state, action)
        },

        add: (key: StateSchemaKey, reducer: Reducer): void => {
            if (!key || reducers[key]) {
                return
            }
            reducers[key] = reducer
            combinedReducer = combineReducers(reducers)
        },

        remove: (key: StateSchemaKey): void => {
            if (!key || !reducers[key]) {
                return
            }

            delete reducers[key]
            keysToRemove.push(key)
            combinedReducer = combineReducers(reducers)
        }
    }
}
