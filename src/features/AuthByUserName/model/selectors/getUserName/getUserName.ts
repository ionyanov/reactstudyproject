import {type StateShema} from 'app/providers/StoreProvider'

export function getUserName (state: StateShema): string {
    return state?.loginForm?.username || ''
}
