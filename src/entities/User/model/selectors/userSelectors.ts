import {type User} from 'entities/User'
import {type StateSchema} from 'shared/lib/providers/StoreProvider'

export const getUserAuthData: (state: StateSchema) => User | undefined = (state: StateSchema) => {
    return state?.user.authData
}

export const getUserIsInit: (state: StateSchema) => boolean = (state: StateSchema) => {
    return state?.user.isInit
}
