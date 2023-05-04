import {type AsyncThunkAction, type PayloadAction, type SerializedError} from '@reduxjs/toolkit'
import axios, {type AxiosStatic} from 'axios'
import {type StateSchema, type ThunkConfig} from '@/shared/lib/providers/StoreProvider'

jest.mock('axios')
const mockedAxios = jest.mocked(axios, {shallow: false})

export class TestAsyncThunk<Return, Args, RejectedValue> {
    dispatch: jest.MockedFn<any>
    getState: () => StateSchema
    actionCreator: (arg: Args) => AsyncThunkAction<Return, Args, ThunkConfig<RejectedValue>>

    api: jest.MockedFunctionDeep<AxiosStatic>

    constructor (actionCreator: (arg: Args) => AsyncThunkAction<Return, Args, ThunkConfig<RejectedValue>>,
        state?: DeepPartial<StateSchema>) {
        this.actionCreator = actionCreator
        this.dispatch = jest.fn()
        this.getState = jest.fn(() => state as StateSchema)

        this.api = mockedAxios
    }

    async callThunk (arg: Args): Promise<PayloadAction<Return, string, {arg: Args, requestId: string, requestStatus: 'fulfilled'}, never>
    | PayloadAction<RejectedValue | undefined, string, any | unknown, SerializedError>> {
        const action = this.actionCreator(arg)

        return (await action(
            this.dispatch,
            this.getState,
            {
                api: this.api
            }))
    }
}
