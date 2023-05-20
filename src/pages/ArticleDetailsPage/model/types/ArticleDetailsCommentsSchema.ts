import type { EntityState } from '@reduxjs/toolkit';
import type { MyComment } from '@/entities/Comment';

export interface ArticleDetailsCommentsSchema extends EntityState<MyComment> {
    isLoading: boolean;
    error?: string;
}
