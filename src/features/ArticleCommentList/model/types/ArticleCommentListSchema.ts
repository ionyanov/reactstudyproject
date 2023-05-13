import { type EntityState } from '@reduxjs/toolkit';
import { type MyComment } from '@/entities/Comment';

export interface ArticleCommentListSchema extends EntityState<MyComment> {
    isLoading?: boolean;
    error?: string;
}
