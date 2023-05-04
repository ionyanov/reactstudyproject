import {createAsyncThunk} from '@reduxjs/toolkit'
import {type MyComment} from '@/entities/Comment'
import {type ThunkConfig} from '@/shared/lib/providers/StoreProvider'

export const fetchCommentsByArticleId = createAsyncThunk<MyComment[], string, ThunkConfig<string>>(
    'Comments/fetchCommentsByArticleId',
    async (articleId, thunkAPI) => {
        try {
            const response = await thunkAPI.extra.api.get<MyComment[]>('/comments', {
                params: {
                    articleId,
                    _expand: 'user'
                }
            })
            return response.data
        } catch (e) {
            return thunkAPI.rejectWithValue('error')
        }
    }
)
