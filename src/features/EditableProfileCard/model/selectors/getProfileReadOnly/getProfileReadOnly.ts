import {type StateSchema} from 'app/providers/StoreProvider'

export function getProfileReadOnly (state: StateSchema): boolean {
    return state.profile?.readOnly || true
}
