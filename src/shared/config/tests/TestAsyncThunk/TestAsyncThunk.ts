import {type StateSchema, type ThunkConfig} from 'app/providers/StoreProvider'
import {type AsyncThunkAction} from '@reduxjs/toolkit'
import axios, {type AxiosStatic} from 'axios'

jest.mock('axios')
const mockedAxios = jest.mocked(axios, {shallow: false})

export class TestAsyncThunk<Return, Args, RejectedValue> {
    dispatch: jest.MockedFn<any>
    getState: () => StateSchema
    actionCreator: (arg: Args) => AsyncThunkAction<Return, Args, ThunkConfig<RejectedValue>>

    api: jest.MockedFunctionDeep<AxiosStatic>
    navigate: jest.MockedFn<any>

    constructor (actionCreator: (arg: Args) => AsyncThunkAction<Return, Args, ThunkConfig<RejectedValue>>) {
        this.actionCreator = actionCreator
        this.dispatch = jest.fn()
        this.getState = jest.fn()

        this.api = mockedAxios
        this.navigate = jest.fn()
    }

    async callThunk (arg: Args) {
        const action = this.actionCreator(arg)
        const result = await action(
            this.dispatch,
            this.getState,
            {
                api: this.api,
                navigate: this.navigate
            })

        return result
    }
}
