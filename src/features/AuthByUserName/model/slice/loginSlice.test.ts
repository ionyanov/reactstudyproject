import {loginReducer, type LoginSchema} from 'features/AuthByUserName'
import {loginActions} from './loginSlice'

describe('loginSlice', () => {
    test('test set username', () => {
        const state: DeepPartial<LoginSchema> = {username: 'username'}
        expect(loginReducer(
            state as LoginSchema,
            loginActions.setUserName('test')
        )).toEqual({username: 'test'})
    })

    test('test set password', () => {
        const state: DeepPartial<LoginSchema> = {password: 'password'}
        expect(loginReducer(
            state as LoginSchema,
            loginActions.setPassword('test')
        )).toEqual({password: 'test'})
    })
})
