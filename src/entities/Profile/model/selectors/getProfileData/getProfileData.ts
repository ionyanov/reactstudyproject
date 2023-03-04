import {type StateSchema} from 'app/providers/StoreProvider'

export const getProfileData = (state: StateSchema) => state.profile?.data ||
    {
        firstname: '',
        lastname: '',
        age: ''

    }
