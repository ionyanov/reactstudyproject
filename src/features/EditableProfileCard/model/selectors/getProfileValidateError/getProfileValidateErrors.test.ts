import {type StateSchema} from 'app/providers/StoreProvider'
import {getProfileValidateError} from './getProfileValidateError'
import {ValidateProfileError} from 'entities/Profile'

describe('getProfileReadOnly', () => {
    test('Should return value', () => {
        const state: DeepPartial<StateSchema> = {
            profile: {validateError: [ValidateProfileError.SERVER_ERROR, ValidateProfileError.SERVER_ERROR]}
        }
        expect(getProfileValidateError(state as StateSchema)).toEqual([ValidateProfileError.SERVER_ERROR, ValidateProfileError.SERVER_ERROR])
    })

    test('Should work with empty state', () => {
        const state: DeepPartial<StateSchema> = {}
        expect(getProfileValidateError(state as StateSchema)).toEqual([])
    })
})
