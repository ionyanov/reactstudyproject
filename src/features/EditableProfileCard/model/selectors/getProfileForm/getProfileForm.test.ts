import {type StateSchema} from 'app/providers/StoreProvider'
import {getProfileForm} from './getProfileForm'
import {type Profile} from 'entities/Profile'
import {Country} from 'entities/Country'
import {Currency} from 'entities/Currency'

describe('getProfileForm', () => {
    test('Should return value', () => {
        const data: Profile = {
            firstname: 'firstname',
            lastname: 'lastname',
            age: 20,
            country: Country.GB,
            city: 'city',
            currency: Currency.EUR,
            username: 'username'
        }
        const state: DeepPartial<StateSchema> = {
            profile: {form: data}
        }
        expect(getProfileForm(state as StateSchema)).toEqual(data)
    })

    test('Should work with empty state', () => {
        const state: DeepPartial<StateSchema> = {}
        expect(getProfileForm(state as StateSchema)).toEqual(undefined)
    })
})
