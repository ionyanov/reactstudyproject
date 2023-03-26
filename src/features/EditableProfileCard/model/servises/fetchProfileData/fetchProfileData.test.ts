import {Country} from 'entities/Country'
import {Currency} from 'entities/Currency'
import {type Profile} from 'entities/Profile'
import {TestAsyncThunk} from 'shared/config/tests/TestAsyncThunk/TestAsyncThunk'
import {fetchProfileData} from './fetchProfileData'

const data: Profile = {
    firstname: 'firstname',
    lastname: 'lastname',
    age: 20,
    country: Country.GB,
    city: 'city',
    currency: Currency.EUR,
    username: 'username'
}

describe('fetchProfileData', () => {
    test('Successes', async () => {
        const thunk = new TestAsyncThunk(fetchProfileData)
        thunk.api.get.mockReturnValue(Promise.resolve({data}))
        const result = await thunk.callThunk('1')

        expect(thunk.api.get).toHaveBeenCalled()
        // method post return fulfilled
        expect(result.meta.requestStatus).toEqual('fulfilled')
        expect(result.payload).toEqual(data)
    })

    test('Error', async () => {
        const thunk = new TestAsyncThunk(fetchProfileData)
        thunk.api.get.mockReturnValue(Promise.reject({status: 403}))
        const result = await thunk.callThunk('1')

        expect(thunk.api.get).toHaveBeenCalled()
        expect(result.meta.requestStatus).toEqual('rejected')
        expect(result.payload).toEqual('error')
    })
})
