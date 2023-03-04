import {createSlice, type PayloadAction} from '@reduxjs/toolkit'
import {type Profile, type ProfileSchema} from '../types/profile'
import {fetchProfileData} from '../servises/fetchProfileData/fetchProfileData'

const initialState: ProfileSchema = {
    isLoading: false,
    readOnly: false,
    error: undefined,
    data: undefined
}

export const profileSlice = createSlice({
    name: 'profile',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchProfileData.pending, (state, action) => {
                state.error = ''
                state.isLoading = true
            })
            .addCase(fetchProfileData.fulfilled, (state, action: PayloadAction<Profile>) => {
                state.data = action.payload
                state.isLoading = false
            })
            .addCase(fetchProfileData.rejected, (state, action) => {
                state.isLoading = false
                state.error = action.payload
            })
    }
})

export const {actions: profileActions} = profileSlice
export const {reducer: profileReducer} = profileSlice
