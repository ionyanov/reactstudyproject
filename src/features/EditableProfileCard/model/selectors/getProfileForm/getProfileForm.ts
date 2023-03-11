import {type StateSchema} from 'app/providers/StoreProvider'
import {type Profile} from 'entities/Profile'

export function getProfileForm (state: StateSchema): Profile | undefined {
    return state.profile?.form
}
