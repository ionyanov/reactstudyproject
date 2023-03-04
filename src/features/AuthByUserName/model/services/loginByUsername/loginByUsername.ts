import {createAsyncThunk} from '@reduxjs/toolkit'
import {type User, userActions} from 'entities/User'
import {LOCALSTORAGE_USER_KEY} from 'shared/const/localstorage'
import {type ThunkConfig} from 'app/providers/StoreProvider'

interface loginByUsernameProps {
    username: string
    password: string
}

export const loginByUsername = createAsyncThunk<User, loginByUsernameProps, ThunkConfig<string>>(
    'login/loginByUsername',
    async (authData, thunkAPI) => {
        try {
            const response = await thunkAPI.extra.api.post<User>('/login', authData)
            if (!response.data) {
                throw new Error()
            }
            localStorage.setItem(LOCALSTORAGE_USER_KEY, JSON.stringify(response.data))
            thunkAPI.dispatch(userActions.setAuthData(response.data))
            thunkAPI.extra.navigate('/profile')
            return response.data
        } catch (e) {
            return thunkAPI.rejectWithValue('error')
        }
    }
)
