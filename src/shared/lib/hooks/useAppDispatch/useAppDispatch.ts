import {
    type AnyAction,
    type CombinedState,
    type ThunkDispatch,
} from '@reduxjs/toolkit';
import { type Reducer } from 'react';
import { useDispatch } from 'react-redux';
import {
    type AppDispatch,
    type StateSchema,
} from '../../providers/StoreProvider';

export const useAppDispatch: () => ThunkDispatch<
    Reducer<CombinedState<StateSchema>, AnyAction>,
    any,
    AnyAction
> = () => useDispatch<AppDispatch>();
