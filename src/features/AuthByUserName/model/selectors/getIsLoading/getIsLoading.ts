import {type StateSchema} from 'shared/lib/providers/StoreProvider'

export function getIsLoading (state: StateSchema): boolean {
    return state?.loginForm?.isLoading || false
}
