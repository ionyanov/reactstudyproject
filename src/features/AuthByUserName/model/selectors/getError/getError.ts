import {type StateSchema} from 'shared/lib/providers/StoreProvider'

export function getError (state: StateSchema): string {
    return state?.loginForm?.error || ''
}
