import {type StateSchema} from 'app/providers/StoreProvider'
import {type ValidateProfileError} from 'entities/Profile'

export function getProfileValidateError (state: StateSchema): ValidateProfileError[] {
    return state.profile?.validateError || []
}
