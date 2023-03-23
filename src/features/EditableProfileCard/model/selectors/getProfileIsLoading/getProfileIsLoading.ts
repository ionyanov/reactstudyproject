import {type StateSchema} from 'app/providers/StoreProvider'

export function getProfileIsLoading (state: StateSchema): boolean | undefined {
    return state.profile?.isLoading
}
