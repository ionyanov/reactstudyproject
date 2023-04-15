import {createSelector} from '@reduxjs/toolkit'
import {type StateSchema} from 'shared/lib/providers/StoreProvider'
import {type User, UserRole} from '../types/user'

export const getUserAuthData: (state: StateSchema) => User | undefined = (state: StateSchema) => {
    return state?.user.authData
}

export const getUserIsInit: (state: StateSchema) => boolean = (state: StateSchema) => {
    return state?.user.isInit ?? false
}

export const getUserRoles: (state: StateSchema) => UserRole[] = createSelector(
    getUserAuthData,
    (authData) => {
        return authData?.roles ?? []
    }
)

export const getUserAdmin: (state: StateSchema) => boolean = createSelector(
    getUserRoles,
    (roles) => {
        return roles.includes(UserRole.ADMIN)
    }
)
