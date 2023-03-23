import {type StateSchema} from 'app/providers/StoreProvider'
import {type User} from 'entities/User'

export const getUserAuthData: (state: StateSchema) => User | undefined = (state: StateSchema) => {
    return state?.user.authData
}

export const getUserIsInit: (state: StateSchema) => boolean = (state: StateSchema) => {
    return state?.user.isInit
}
