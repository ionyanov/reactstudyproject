import {Country} from '@/entities/Country'
import {Currency} from '@/entities/Currency'
import {type Profile, ValidateProfileError} from '@/entities/Profile'
import {validateProfileData} from './validateProfileData'

const data: Profile = {
    firstname: 'firstname',
    lastname: 'lastname',
    age: 20,
    country: Country.GB,
    city: 'city',
    currency: Currency.EUR,
    username: 'username'
}

describe('validateProfileData.test', () => {
    test('success', async () => {
        const result = validateProfileData(data)

        expect(result).toEqual([])
    })

    test('without first and last name', async () => {
        const result = validateProfileData({...data, firstname: '', lastname: ''})

        expect(result).toEqual([
            ValidateProfileError.INCORRECT_NAME
        ])
    })

    test('incorrect age', async () => {
        const result = validateProfileData({...data, age: undefined})

        expect(result).toEqual([
            ValidateProfileError.INCORRECT_AGE
        ])
    })

    test('incorrect all', async () => {
        const result = validateProfileData({})

        expect(result).toEqual([
            ValidateProfileError.INCORRECT_NAME,
            ValidateProfileError.INCORRECT_AGE
        ])
    })

    test('undefined profile', async () => {
        const result = validateProfileData(undefined)

        expect(result).toEqual([
            ValidateProfileError.INCORRECT_USER_DATA
        ])
    })
})
