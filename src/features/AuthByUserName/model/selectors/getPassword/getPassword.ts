import {type StateShema} from 'app/providers/StoreProvider'

export function getPassword (state: StateShema): string {
    return state?.loginForm?.password || ''
}
