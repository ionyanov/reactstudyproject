import {type StateSchema} from 'app/providers/StoreProvider'

export function getError (state: StateSchema): string {
    return state?.loginForm?.error || ''
}
