import {useDispatch} from 'react-redux'
import {type AppDispatch, type StateSchema} from 'app/providers/StoreProvider'
import {type AnyAction, type CombinedState, type ThunkDispatch} from '@reduxjs/toolkit'
import {type Reducer} from 'react'

export const useAppDispatch: () => ThunkDispatch<Reducer<CombinedState<StateSchema>, AnyAction>, any, AnyAction> = () => useDispatch<AppDispatch>()
