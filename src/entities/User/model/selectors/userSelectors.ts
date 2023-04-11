import {type StateSchema} from 'shared/lib/providers/StoreProvider'
import {type User} from '../types/user'

export const getUserAuthData: (state: StateSchema) => User | undefined = (state: StateSchema) => {
    return state?.user.authData
}

export const getUserIsInit: (state: StateSchema) => boolean = (state: StateSchema) => {
    return state?.user.isInit ?? false
}
