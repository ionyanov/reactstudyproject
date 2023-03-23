import {type MyComment} from 'entities/Comment'
import {type EntityState} from '@reduxjs/toolkit'

export interface ArticleCommentListSchema extends EntityState<MyComment> {
    isLoading?: boolean
    error?: string
}
