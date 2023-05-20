import { createAsyncThunk } from '@reduxjs/toolkit';
import { type MyComment } from '@/entities/Comment';
import { type ThunkConfig } from '@/shared/lib/providers/StoreProvider';

export const fetchCommentsByArticleId = createAsyncThunk<
    MyComment[],
    string | undefined,
    ThunkConfig<string>
>(
    'articleDetailsCommentsSlice/fetchCommentsByArticleId',
    async (articleId, thunkAPI) => {
        if (!articleId) {
            return thunkAPI.rejectWithValue('error');
        }

        try {
            const response = await thunkAPI.extra.api.get<MyComment[]>(
                '/comments',
                {
                    params: {
                        articleId,
                        _expand: 'user',
                    },
                },
            );

            if (!response.data) {
                throw new Error();
            }
            return response.data;
        } catch (e) {
            return thunkAPI.rejectWithValue('error');
        }
    },
);
