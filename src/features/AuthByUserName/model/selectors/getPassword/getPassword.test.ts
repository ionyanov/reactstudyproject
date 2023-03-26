import {type StateSchema} from 'shared/lib/providers/StoreProvider'
import {getPassword} from './getPassword'

describe('getPassword', () => {
    test('Should return error', () => {
        const state: DeepPartial<StateSchema> = {
            loginForm: {password: 'password'}
        }
        expect(getPassword(state as StateSchema)).toEqual('password')
    })

    test('Should woek with empty state', () => {
        const state: DeepPartial<StateSchema> = {}
        expect(getPassword(state as StateSchema)).toEqual('')
    })
})
