import { createAsyncThunk } from '@reduxjs/toolkit';
import { type Profile } from '@/entities/Profile';
import { type ThunkConfig } from '@/shared/lib/providers/StoreProvider';

export const fetchProfileData = createAsyncThunk<
    Profile,
    string,
    ThunkConfig<string>
>('profile/fetchProfileData', async (profileId, thunkAPI) => {
    try {
        const response = await thunkAPI.extra.api.get<Profile>(
            `/profile/${profileId}`,
        );
        if (!response.data) {
            throw new Error();
        }
        return response.data;
    } catch (e) {
        return thunkAPI.rejectWithValue('error');
    }
});
