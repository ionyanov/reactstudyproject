import {type StateSchema} from 'app/providers/StoreProvider'

export function getPassword (state: StateSchema): string {
    return state?.loginForm?.password || ''
}
