import {type StateSchema} from 'app/providers/StoreProvider'

export function getProfileError (state: StateSchema): string {
    return state.profile?.error || ''
}
