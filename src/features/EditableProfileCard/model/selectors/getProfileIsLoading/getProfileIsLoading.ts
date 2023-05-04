import {type StateSchema} from '@/shared/lib/providers/StoreProvider'

export function getProfileIsLoading (state: StateSchema): boolean | undefined {
    return state.profile?.isLoading
}
