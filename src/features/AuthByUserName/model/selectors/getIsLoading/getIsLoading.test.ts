import {type StateSchema} from 'shared/lib/providers/StoreProvider'
import {getIsLoading} from './getIsLoading'

describe('getIsLoading', () => {
    test('Should return error', () => {
        const state: DeepPartial<StateSchema> = {
            loginForm: {isLoading: true}
        }
        expect(getIsLoading(state as StateSchema)).toEqual(true)
    })

    test('Should woek with empty state', () => {
        const state: DeepPartial<StateSchema> = {}
        expect(getIsLoading(state as StateSchema)).toEqual(false)
    })
})
