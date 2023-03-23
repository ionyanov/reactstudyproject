import {updateProfileData} from './updateProfileData'
import {TestAsyncThunk} from 'shared/config/tests/TestAsyncThunk/TestAsyncThunk'
import {type Profile, ValidateProfileError} from 'entities/Profile'
import {Country} from 'entities/Country'
import {Currency} from 'entities/Currency'

const data: Profile = {
    firstname: 'firstname',
    lastname: 'lastname',
    age: 20,
    country: Country.GB,
    city: 'city',
    currency: Currency.EUR,
    username: 'username'
}

describe('updateProfileData', () => {
    test('Successes', async () => {
        const thunk = new TestAsyncThunk(updateProfileData, {profile: {form: data}})
        thunk.api.put.mockReturnValue(Promise.resolve({data}))
        const result = await thunk.callThunk('1')

        expect(thunk.api.put).toHaveBeenCalled()
        // method post return fulfilled
        expect(result.meta.requestStatus).toEqual('fulfilled')
        expect(result.payload).toEqual(data)
    })

    test('Error', async () => {
        const thunk = new TestAsyncThunk(updateProfileData, {profile: {form: data}})
        thunk.api.put.mockReturnValue(Promise.reject({status: 403}))
        const result = await thunk.callThunk('1')

        expect(thunk.api.put).toHaveBeenCalled()
        expect(result.meta.requestStatus).toEqual('rejected')
        expect(result.payload).toEqual([ValidateProfileError.SERVER_ERROR])
    })

    test('Validate Error', async () => {
        const thunk = new TestAsyncThunk(updateProfileData, {profile: {form: {...data, lastname: ''}}})
        const result = await thunk.callThunk('1')

        expect(result.meta.requestStatus).toEqual('rejected')
        expect(result.payload).toEqual([ValidateProfileError.INCORRECT_NAME])
    })
})
