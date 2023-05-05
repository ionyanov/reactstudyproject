import type {FC} from 'react'
import {useCallback} from 'react'
import {useTranslation} from 'react-i18next'
import {useSelector} from 'react-redux'
import {RatingCard} from '@/entities/Rating'
import {getUserAuthData} from '@/entities/User'
import {Skeleton} from '@/shared/ui/Skeleton/Skeleton'
import {useGetArticleRating, useRateArticle} from '../model/api/articleRating'

export interface ArticleRatingProps {
    className?: string
    articleId: string
}

const ArticleRating: FC<ArticleRatingProps> = (props) => {
    const {t} = useTranslation()
    const userData = useSelector(getUserAuthData)
    const [rateArticleMutation] = useRateArticle()
    const {data, isLoading} = useGetArticleRating({userId: userData?.id ?? '', articleId: props.articleId})

    const handleRate = useCallback((starsCount: number, feedback?: string) => {
        try {
            rateArticleMutation({
                userId: userData?.id ?? '',
                articleId: props.articleId,
                rate: starsCount,
                feedback
            })
        } catch (e) {
            console.log(e)
        }
    }, [userData, props, rateArticleMutation])

    const onAccept = useCallback((starsCount: number, feedback?: string) => {
        handleRate(starsCount, feedback)
    }, [handleRate])

    const onCancel = useCallback((starsCount: number) => {
        handleRate(starsCount)
    }, [handleRate])

    if (isLoading) {
        return (<Skeleton height={'30px'} width={'100%'}/>)
    }

    return (
        <RatingCard
            className={props.className}
            hasFeedback={true}
            title={t('Оцените статью') || ''}
            feedbackTitle={t('Оставьте отзыв о статье') || ''}
            onAccept={onAccept}
            onCancel={onCancel}
            rate={data?.[0].rate ?? 0}
        />
    )
}

export default ArticleRating
