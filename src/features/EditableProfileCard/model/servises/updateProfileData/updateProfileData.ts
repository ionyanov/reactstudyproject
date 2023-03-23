import {createAsyncThunk} from '@reduxjs/toolkit'
import {type StateSchema, type ThunkConfig} from 'app/providers/StoreProvider'
import {type Profile, ValidateProfileError} from 'entities/Profile'
import {getProfileForm} from '../../selectors/getProfileForm/getProfileForm'
import {validateProfileData} from '../validateProfileData/validateProfileData'

export const updateProfileData = createAsyncThunk<Profile, string, ThunkConfig<ValidateProfileError[]>>(
    'profile/updateProfileData',
    async (profileId, thunkAPI) => {
        try {
            const formData = getProfileForm(thunkAPI.getState() as StateSchema)

            const errors = validateProfileData(formData)
            if (errors.length) {
                return thunkAPI.rejectWithValue(errors)
            }
            const response = await thunkAPI.extra.api.put<Profile>(`/profile/${profileId}`, formData)
            return response.data
        } catch (e) {
            return thunkAPI.rejectWithValue([ValidateProfileError.SERVER_ERROR])
        }
    }
)
