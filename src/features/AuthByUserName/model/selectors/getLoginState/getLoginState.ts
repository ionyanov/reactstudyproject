import {type StateShema} from 'app/providers/StoreProvider'
import {type LoginSchema} from 'features/AuthByUserName'

export function getLoginState (state: StateShema): LoginSchema {
    return state?.loginForm
}
