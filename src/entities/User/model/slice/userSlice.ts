import {createSlice, type PayloadAction} from '@reduxjs/toolkit'
import {LOCALSTORAGE_USER_KEY} from 'shared/const/localstorage'
import {type User, type UserSchema} from '../types/user'

const initialState: UserSchema = {
    isInit: false
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setAuthData: (state, action: PayloadAction<User>) => {
            state.authData = action.payload
        },
        initAuthData: (state) => {
            const user = localStorage.getItem(LOCALSTORAGE_USER_KEY)
            if (user) {
                state.authData = JSON.parse(user)
            }
            state.isInit = true
        },
        logout: (state) => {
            localStorage.removeItem(LOCALSTORAGE_USER_KEY)
            state.authData = undefined
        }
    }
})

export const {actions: userActions} = userSlice
export const {reducer: userReducer} = userSlice
