import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import { type Profile, type ProfileSchema } from '@/entities/Profile';
import { fetchProfileData } from '../servises/fetchProfileData/fetchProfileData';
import { updateProfileData } from '../servises/updateProfileData/updateProfileData';

const initialState: ProfileSchema = {
    isLoading: false,
    readOnly: true,
    error: undefined,
    data: undefined,
};

export const profileSlice = createSlice({
    name: 'profile',
    initialState,
    reducers: {
        setReadonly: (state, action: PayloadAction<boolean>) => {
            state.readOnly = action.payload;
        },
        cancelEdit: (state) => {
            state.readOnly = true;
            state.form = state.data;
            state.validateError = undefined;
        },
        setProfile: (state, action: PayloadAction<Profile>) => {
            state.form = { ...state.form, ...action.payload };
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchProfileData.pending, (state, action) => {
                state.error = '';
                state.isLoading = true;
            })
            .addCase(
                fetchProfileData.fulfilled,
                (state, action: PayloadAction<Profile>) => {
                    state.data = action.payload;
                    state.form = action.payload;
                    state.isLoading = false;
                },
            )
            .addCase(fetchProfileData.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            })

            .addCase(updateProfileData.pending, (state, action) => {
                state.error = '';
                state.validateError = undefined;
                state.isLoading = true;
            })
            .addCase(
                updateProfileData.fulfilled,
                (state, action: PayloadAction<Profile>) => {
                    state.data = action.payload;
                    state.form = action.payload;
                    state.isLoading = false;
                    state.readOnly = true;
                    state.validateError = undefined;
                },
            )
            .addCase(updateProfileData.rejected, (state, action) => {
                state.isLoading = false;
                state.validateError = action.payload;
            });
    },
});

export const { actions: profileActions } = profileSlice;
export const { reducer: profileReducer } = profileSlice;
