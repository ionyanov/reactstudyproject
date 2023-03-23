import {type StateSchema} from 'app/providers/StoreProvider'

export function getProfileReadOnly (state: StateSchema): boolean | undefined {
    return state.profile?.readOnly
}
