import { lazy } from 'react';

export const AddCommentCardAsync = lazy(
    async () => await import('./AddCommentCard'),
);
