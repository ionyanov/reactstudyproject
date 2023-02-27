import {type StateShema} from 'app/providers/StoreProvider'

export function getError (state: StateShema): string {
    return state?.loginForm?.error || ''
}
