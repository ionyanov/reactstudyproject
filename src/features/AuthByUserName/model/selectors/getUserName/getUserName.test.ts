import {type StateSchema} from 'app/providers/StoreProvider'
import {getUserName} from './getUserName'

describe('getUserName', () => {
    test('Should return error', () => {
        const state: DeepPartial<StateSchema> = {
            loginForm: {username: 'UserName'}
        }
        expect(getUserName(state as StateSchema)).toEqual('UserName')
    })

    test('Should woek with empty state', () => {
        const state: DeepPartial<StateSchema> = {}
        expect(getUserName(state as StateSchema)).toEqual('')
    })
})
