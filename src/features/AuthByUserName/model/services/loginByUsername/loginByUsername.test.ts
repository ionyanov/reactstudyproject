import {userActions} from 'entities/User'
import {TestAsyncThunk} from 'shared/config/tests/TestAsyncThunk/TestAsyncThunk'
import {loginByUsername} from './loginByUsername'

describe('loginByUsername', () => {
    test('Successes login', async () => {
        const userValue = {username: 'username', id: 'id'}
        const thunk = new TestAsyncThunk(loginByUsername)
        thunk.api.post.mockReturnValue(Promise.resolve({data: userValue}))
        const result = await thunk.callThunk({username: 'test', password: 'test'})

        // was called with this data
        expect(thunk.dispatch).toHaveBeenCalledWith(userActions.setAuthData(userValue))
        expect(thunk.dispatch).toHaveBeenCalledTimes(3)
        // was called method post
        expect(thunk.api.post).toHaveBeenCalled()
        // method post return fulfilled
        expect(result.meta.requestStatus).toEqual('fulfilled')
        expect(result.payload).toEqual(userValue)
    })

    test('error login', async () => {
        const thunk = new TestAsyncThunk(loginByUsername)
        thunk.api.post.mockReturnValue(Promise.resolve({status: 403}))
        const result = await thunk.callThunk({username: 'test', password: 'test'})

        expect(thunk.dispatch).toHaveBeenCalledTimes(2)
        expect(thunk.api.post).toHaveBeenCalled()
        expect(result.meta.requestStatus).toEqual('rejected')
        expect(result.payload).toEqual('error')
    })
})
