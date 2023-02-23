import {type StateShema} from 'app/providers/StoreProvider'
import {type User} from 'entities/User'

export const getUserAuthData: (state: StateShema) => User = (state: StateShema) => {
    return state?.user.authData
}
