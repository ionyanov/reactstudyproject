import {createSlice, type PayloadAction} from '@reduxjs/toolkit'

const addCommentCardSlice = createSlice({
    name: 'AddCommentCard',
    initialState: {
        error: undefined,
        text: ''
    },
    reducers: {
        setText: (state, action: PayloadAction<string>) => {
            state.text = action.payload
        }
    },
    extraReducers: (builder) => {
        /* builder
            .addCase(fetchCommentsByArticleId.pending, (state, action) => {
                state.error = ''
                state.isLoading = true
            })
            .addCase(fetchCommentsByArticleId.fulfilled, (state, action: PayloadAction<Comment[]>) => {
                state.isLoading = false
                commentsAdapter.setAll(state, action.payload)
            })
            .addCase(fetchCommentsByArticleId.rejected, (state, action) => {
                state.isLoading = false
                state.error = action.payload
            }) */
    }
})

export const {actions: addArticleCommentAction} = addCommentCardSlice
export const {reducer: addArticleCommentReducer} = addCommentCardSlice
