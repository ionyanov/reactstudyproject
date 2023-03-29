import {createSlice, type PayloadAction} from '@reduxjs/toolkit'
import {type AddCommentCardSchema} from '../types/addCommentCard'

const initialState: AddCommentCardSchema = {
    error: undefined,
    text: ''
}

const addCommentCardSlice = createSlice({
    name: 'AddCommentCard',
    initialState,
    reducers: {
        setText: (state, action: PayloadAction<string>) => {
            state.text = action.payload
        }
    }
    /* extraReducers: (builder) => {
         builder
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
            })
    } */
})

export const {actions: addArticleCommentAction} = addCommentCardSlice
export const {reducer: addArticleCommentReducer} = addCommentCardSlice
