import {type StateSchema} from 'app/providers/StoreProvider'
import {getProfileData} from './getProfileData'
import {type Profile} from 'entities/Profile'
import {Country} from 'entities/Country'
import {Currency} from 'entities/Currency'

describe('getProfileData', () => {
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
            profile: {data}
        }
        expect(getProfileData(state as StateSchema)).toEqual(data)
    })

    test('Should work with empty state', () => {
        const state: DeepPartial<StateSchema> = {}
        expect(getProfileData(state as StateSchema)).toEqual(undefined)
    })
})
