import {type StateSchema} from 'app/providers/StoreProvider'

export function getUserName (state: StateSchema): string {
    return state?.loginForm?.username || ''
}
