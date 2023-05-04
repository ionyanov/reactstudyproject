import {type StateSchema} from '@/shared/lib/providers/StoreProvider'

export function getProfileReadOnly (state: StateSchema): boolean | undefined {
    return state.profile?.readOnly
}
