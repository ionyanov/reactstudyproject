import {createAsyncThunk} from '@reduxjs/toolkit'
import {getArticleDetailsData} from 'entities/Article/model/selectors/articaleDetails'
import {type MyComment} from 'entities/Comment'
import {getUserAuthData} from 'entities/User'
import {type StateSchema, type ThunkConfig} from 'shared/lib/providers/StoreProvider'

export const sendComment = createAsyncThunk<MyComment, string, ThunkConfig<string>>(
    'ArticleDetailsPage/sendComment',
    async (text, thunkAPI) => {
        try {
            const userData = getUserAuthData(thunkAPI.getState() as StateSchema)
            const article = getArticleDetailsData(thunkAPI.getState() as StateSchema)

            if (!userData || !text || !article) {
                return thunkAPI.rejectWithValue('no data')
            }

            const response = await thunkAPI.extra.api.post<MyComment>('/comments', {
                articleId: article.id,
                userId: userData.id,
                text
            })
            return response.data
        } catch (e) {
            return thunkAPI.rejectWithValue('error')
        }
    }
)