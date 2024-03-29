import { type FC, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getArticleDetailsData } from '@/entities/Article';
import { getRouteArticleEdit, getRouteArticles } from '@/shared/const/router';
import { Button } from '@/shared/ui/Button';
import { HStack } from '@/shared/ui/Stack';
import { getCanEditArticle } from '../../model/selectors/article';

interface ArticleDetailPageHeaderProps {
    className?: string;
}

export const ArticleDetailPageHeader: FC<ArticleDetailPageHeaderProps> = (
    props,
) => {
    const { t } = useTranslation('article');
    const navigate = useNavigate();
    const canEdit = useSelector(getCanEditArticle);
    const article = useSelector(getArticleDetailsData);

    const onBackToList = useCallback(() => {
        navigate(getRouteArticles());
    }, [navigate]);

    const onEditArticle = useCallback(() => {
        navigate(getRouteArticleEdit(article?.id || ''));
    }, [navigate, article]);

    return (
        <HStack max justify={'between'} className={props.className}>
            <Button onClick={onBackToList}>{t('Назад к списку')}</Button>
            {canEdit && (
                <Button onClick={onEditArticle}>{t('Редактировать')}</Button>
            )}
        </HStack>
    );
};
