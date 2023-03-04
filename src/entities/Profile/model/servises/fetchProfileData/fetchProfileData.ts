import {createAsyncThunk} from '@reduxjs/toolkit'
import {type ThunkConfig} from 'app/providers/StoreProvider'
import {type Profile} from '../../types/profile'

interface fetchProfileDataProps {
    id?: string
}

export const fetchProfileData = createAsyncThunk<Profile, fetchProfileDataProps, ThunkConfig<string>>(
    'profile/fetchProfileData',
    async (props, thunkAPI) => {
        try {
            const response = await thunkAPI.extra.api.get<Profile>('/profile')
            return response.data
        } catch (e) {
            return thunkAPI.rejectWithValue('error')
        }
    }
)
