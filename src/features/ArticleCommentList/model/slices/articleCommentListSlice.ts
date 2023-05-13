import {
    createEntityAdapter,
    createSlice,
    type PayloadAction,
} from '@reduxjs/toolkit';

import { type MyComment } from '@/entities/Comment';
import { type StateSchema } from '@/shared/lib/providers/StoreProvider';
import { fetchCommentsByArticleId } from '../services/fetchCommentsByArticleId';
import { type ArticleCommentListSchema } from '../types/ArticleCommentListSchema';

const commentsAdapter = createEntityAdapter<MyComment>({
    selectId: (comment) => comment.id,
});

export const getArticleComments = commentsAdapter.getSelectors<StateSchema>(
    (state) => state.articleCommentList || commentsAdapter.getInitialState(),
);

const articleCommentListSlice = createSlice({
    name: 'articleCommentListSlice',
    initialState: commentsAdapter.getInitialState<ArticleCommentListSchema>({
        isLoading: false,
        error: undefined,
        ids: [],
        entities: {},
    }),
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchCommentsByArticleId.pending, (state, action) => {
                state.error = '';
                state.isLoading = true;
            })
            .addCase(
                fetchCommentsByArticleId.fulfilled,
                (state, action: PayloadAction<MyComment[]>) => {
                    state.isLoading = false;
                    commentsAdapter.setAll(state, action.payload);
                },
            )
            .addCase(fetchCommentsByArticleId.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            });
    },
});

export const { reducer: articleCommentListReducer } = articleCommentListSlice;
