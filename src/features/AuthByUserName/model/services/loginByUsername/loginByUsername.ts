import {createAsyncThunk} from '@reduxjs/toolkit'
import {type User, userActions} from 'entities/User'
import {RoutePath} from 'shared/config/routeConfig/routeConfig'
import {LOCALSTORAGE_USER_KEY} from 'shared/const/localstorage'
import {type ThunkConfig} from 'shared/lib/providers/StoreProvider'

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
            thunkAPI.extra.navigate(RoutePath.profile + response.data.id)
            return response.data
        } catch (e) {
            return thunkAPI.rejectWithValue('error')
        }
    }
)
