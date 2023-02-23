import {type UserSchema} from 'entities/User'
import {type LoginSchema} from 'features/AuthByUserName'

export interface StateShema {
    user: UserSchema
    loginForm?: LoginSchema
}
