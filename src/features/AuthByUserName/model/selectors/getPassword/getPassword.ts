import {type StateSchema} from 'shared/lib/providers/StoreProvider'

export function getPassword (state: StateSchema): string {
    return state?.loginForm?.password || ''
}
