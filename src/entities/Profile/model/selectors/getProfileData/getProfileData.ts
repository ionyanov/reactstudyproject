import {type StateSchema} from 'app/providers/StoreProvider'
import {type Profile} from 'entities/Profile'

const defaultData: Profile = {
    firstname: '',
    lastname: ''
}

export function getProfileData (state: StateSchema): Profile | undefined {
    return state.profile?.data || defaultData
}
