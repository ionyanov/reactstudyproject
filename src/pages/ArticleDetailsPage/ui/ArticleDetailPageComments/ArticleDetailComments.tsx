import { type FC, Suspense, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { AddCommentCard } from '@/features/AddCommentCard';
import { CommentList } from '@/entities/Comment';
import { classNames } from '@/shared/lib/classNames/classNames';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useInitialEffect } from '@/shared/lib/hooks/useInitialEffect/useInitialEffect';
import { Loader } from '@/shared/ui/Loader';
import { VStack } from '@/shared/ui/Stack';
import { Text } from '@/shared/ui/Text';
import { getArticleCommentsIsLoading } from '../../model/selectors/comments';
import { fetchCommentsByArticleId } from '../../model/services/fetchCommentsByArticleId';
import { sendComment } from '../../model/services/sendComment';
import { getArticleComments } from '../../model/slices/articleDetailsCommentsSlice';
import cls from './ArticleDetailComments.module.scss';

interface ArticleDetailCommentsProps {
    className?: string;
    id: string;
}

export const ArticleDetailComments: FC<ArticleDetailCommentsProps> = (
    props,
) => {
    const { t } = useTranslation('article');
    const comments = useSelector(getArticleComments.selectAll);
    const commentsIsLoading = useSelector(getArticleCommentsIsLoading);

    const dispatch = useAppDispatch();

    const onSendComment = useCallback(
        (text: string) => {
            dispatch(sendComment(text));
        },
        [dispatch],
    );

    useInitialEffect(() => {
        dispatch(fetchCommentsByArticleId(props.id));
    });
    return (
        <VStack
            gap={'16'}
            max
            className={classNames(cls.ArticleDetailComments, {}, [
                props.className,
            ])}>
            <Text className={cls.commentsTitle} title={t('Комментарии')} />
            <Suspense fallback={<Loader />}>
                <AddCommentCard onSendComment={onSendComment} />
            </Suspense>
            <CommentList isLoading={commentsIsLoading} comments={comments} />
        </VStack>
    );
};
