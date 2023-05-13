import { type FC, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { AddCommentCard } from '@/features/AddCommentCard';
import { ArticleCommentList } from '@/features/ArticleCommentList';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { VStack } from '@/shared/ui/Stack';
import { Text } from '@/shared/ui/Text';
import { sendComment } from '../../model/services/sendComment';
import cls from './ArticleDetailComments.module.scss';

interface ArticleDetailCommentsProps {
    className?: string;
    id: string;
}

export const ArticleDetailComments: FC<ArticleDetailCommentsProps> = (
    props,
) => {
    const { t } = useTranslation('article');
    const dispatch = useAppDispatch();

    const onSendComment = useCallback(
        (text: string) => {
            dispatch(sendComment(text));
        },
        [dispatch],
    );
    return (
        <VStack gap={'16'} max className={props.className}>
            <Text className={cls.commentsTitle} title={t('Комментарии')} />
            <AddCommentCard onSendComment={onSendComment} />
            <ArticleCommentList articleId={props.id} />
        </VStack>
    );
};
