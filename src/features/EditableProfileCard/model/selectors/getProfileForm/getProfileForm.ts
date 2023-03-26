import {type Profile} from 'entities/Profile'
import {type StateSchema} from 'shared/lib/providers/StoreProvider'

export function getProfileForm (state: StateSchema): Profile | undefined {
    return state.profile?.form
}
