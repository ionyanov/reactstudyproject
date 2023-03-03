import {type StateSchema} from 'app/providers/StoreProvider'

export function getIsLoading (state: StateSchema): boolean {
    return state?.loginForm?.isLoading || false
}
