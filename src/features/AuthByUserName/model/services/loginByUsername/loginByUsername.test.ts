import axios from 'axios'
import {loginByUsername} from './loginByUsername'
import {userActions} from 'entities/User'
import {TestAsyncThunk} from 'shared/config/tests/TestAsyncThunk/TestAsyncThunk'

jest.mock('axios')
const mockedAxios = jest.mocked(axios, {shallow: false})

describe('loginByUsername', () => {
    test('Successes login', async () => {
        const userValue = {username: 'username', id: 'id'}
        mockedAxios.post.mockReturnValue(Promise.resolve({data: userValue}))
        const thunk = new TestAsyncThunk(loginByUsername)
        const result = await thunk.callThunk({username: 'test', password: 'test'})

        // was called with this data
        expect(thunk.dispatch).toHaveBeenCalledWith(userActions.setAuthData(userValue))
        expect(thunk.dispatch).toHaveBeenCalledTimes(3)
        // was called method post
        expect(mockedAxios.post).toHaveBeenCalled()
        // method post return fulfilled
        expect(result.meta.requestStatus).toEqual('fulfilled')
        expect(result.payload).toEqual(userValue)
    })

    test('error login', async () => {
        mockedAxios.post.mockReturnValue(Promise.resolve({status: 403}))
        const thunk = new TestAsyncThunk(loginByUsername)
        const result = await thunk.callThunk({username: 'test', password: 'test'})

        expect(thunk.dispatch).toHaveBeenCalledTimes(2)
        expect(mockedAxios.post).toHaveBeenCalled()
        expect(result.meta.requestStatus).toEqual('rejected')
        expect(result.payload).toEqual('error')
    })
})
