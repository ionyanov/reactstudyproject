import {type StateSchema} from 'app/providers/StoreProvider'

export function getProfileIsLoading (state: StateSchema): boolean {
    return state.profile?.isLoading || false
}
