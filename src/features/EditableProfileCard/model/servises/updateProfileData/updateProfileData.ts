import {createAsyncThunk} from '@reduxjs/toolkit'
import {type StateSchema, type ThunkConfig} from 'app/providers/StoreProvider'
import {type Profile, ValidateProfileError} from 'entities/Profile'
import {getProfileForm} from '../../selectors/getProfileForm/getProfileForm'
import {validateProfileData} from '../validateProfileData/validateProfileData'

export const updateProfileData = createAsyncThunk<Profile, undefined, ThunkConfig<ValidateProfileError[]>>(
    'profile/updateProfilelData',
    async (props, thunkAPI) => {
        try {
            const formData = getProfileForm(thunkAPI.getState() as StateSchema)

            const errors = validateProfileData(formData)
            if (errors.length) {
                return thunkAPI.rejectWithValue(errors)
            }
            const response = await thunkAPI.extra.api.put<Profile>('/profile', formData)
            return response.data
        } catch (e) {
            return thunkAPI.rejectWithValue([ValidateProfileError.SERVER_ERROR])
        }
    }
)
