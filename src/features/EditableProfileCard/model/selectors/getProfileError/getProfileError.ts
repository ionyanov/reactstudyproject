import {type StateSchema} from 'shared/lib/providers/StoreProvider'

export function getProfileError (state: StateSchema): string {
    return state.profile?.error || ''
}
