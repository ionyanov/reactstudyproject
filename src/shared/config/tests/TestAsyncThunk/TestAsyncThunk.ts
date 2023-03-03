import {type StateSchema} from 'app/providers/StoreProvider'
import {type AsyncThunkAction} from '@reduxjs/toolkit'

export class TestAsyncThunk<Return, Args, RejectedValue> {
    dispatch: jest.MockedFn<any>
    getState: () => StateSchema
    actionCreator: (arg: Args) => AsyncThunkAction<Return, Args, {rejectValue: RejectedValue}>

    constructor (actionCreator: (arg: Args) => AsyncThunkAction<Return, Args, {rejectValue: RejectedValue}>) {
        this.actionCreator = actionCreator
        this.dispatch = jest.fn()
        this.getState = jest.fn()
    }

    async callThunk (arg: Args) {
        const action = this.actionCreator(arg)
        const result = await action(this.dispatch, this.getState, undefined)

        return result
    }
}
