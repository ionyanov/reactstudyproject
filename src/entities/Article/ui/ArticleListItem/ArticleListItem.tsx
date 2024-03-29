import { type FC, type HTMLAttributeAnchorTarget } from 'react';
import { useTranslation } from 'react-i18next';
import EyeIcon from '@/shared/assets/icons/eye-20-20.svg';
import { getRouteArticleDetail } from '@/shared/const/router';
import { classNames } from '@/shared/lib/classNames/classNames';
import { AppImage } from '@/shared/ui/AppImage';
import { AppLink } from '@/shared/ui/AppLink';
import { Avatar } from '@/shared/ui/Avatar';
import { Button } from '@/shared/ui/Button';
import { Card } from '@/shared/ui/Card';
import { Icon } from '@/shared/ui/Icon';
import { Skeleton } from '@/shared/ui/Skeleton';
import { HStack, VStack } from '@/shared/ui/Stack';
import { Text } from '@/shared/ui/Text';
import {
    type Article,
    type ArticleBlockText,
    ArticleBlockType,
    ArticleView,
} from '../../model/types/article';
import { ArticleBlockTextComponent } from '../ArticleBlockTextComponent/ArticleBlockTextComponent';
import cls from './ArticleListItem.module.scss';

interface ArticleListItemProps {
    className?: string;
    article: Article;
    view: ArticleView;
    target?: HTMLAttributeAnchorTarget;
}

export const ArticleListItem: FC<ArticleListItemProps> = (props) => {
    const { t } = useTranslation('article');

    if (props.view === ArticleView.LIST) {
        const textBlock = props.article.blocks.find(
            (block) => block.type === ArticleBlockType.TEXT,
        ) as ArticleBlockText;

        return (
            <Card
                className={classNames(cls.ArticleListItem, {}, [
                    props.className,
                    cls[props.view],
                ])}
                data-testid={'ArticleListItem'}>
                <div className={cls.header}>
                    <Avatar size={30} src={props.article.user.avatar} />
                    <Text
                        text={props.article.user.username}
                        className={cls.username}
                    />
                    <Text text={props.article.createdAt} className={cls.date} />
                </div>
                <Text text={props.article.title} className={cls.title} />
                <Text
                    text={props.article.type.join(', ')}
                    className={cls.types}
                />
                <AppImage
                    src={props.article.img}
                    alt={props.article.title}
                    className={cls.img}
                    fallback={<Skeleton className={cls.img} />}
                />
                {textBlock && (
                    <ArticleBlockTextComponent
                        block={textBlock}
                        className={cls.block}
                    />
                )}
                <div className={cls.footer}>
                    <AppLink
                        to={getRouteArticleDetail(props.article.id)}
                        target={props.target}>
                        <Button>{t('Читать далее...')}</Button>
                    </AppLink>
                    <Text
                        text={props.article.views.toString()}
                        className={cls.view}
                    />
                    <Icon Svg={EyeIcon} />
                </div>
            </Card>
        );
    }

    return (
        <AppLink
            to={getRouteArticleDetail(props.article.id)}
            target={props.target}>
            <Card
                className={classNames(cls.ArticleListItem, {}, [
                    props.className,
                    cls[props.view],
                ])}
                data-testid={'ArticleListItem'}>
                <VStack className={cls.imageWrapper}>
                    <AppImage
                        src={props.article.img}
                        alt={props.article.title}
                        className={cls.img}
                        fallback={<Skeleton className={cls.img} />}
                    />
                    <Text text={props.article.createdAt} className={cls.date} />
                </VStack>
                <HStack gap={'8'} justify={'between'}>
                    <Text
                        text={props.article.type.join(', ')}
                        className={cls.types}
                    />
                    <Text
                        text={props.article.views.toString()}
                        className={cls.view}
                    />
                    <Icon Svg={EyeIcon} />
                </HStack>
                <Text text={props.article.title} className={cls.title} />
            </Card>
        </AppLink>
    );
};
