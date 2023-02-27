import {type StateShema} from 'app/providers/StoreProvider'

export function getIsLoading (state: StateShema): boolean {
    return state?.loginForm?.isLoading || false
}
