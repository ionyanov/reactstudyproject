import {type Article} from '@/entities/Article'
import {rtkAPI} from '@/shared/api/rtkAPI'

const recommendationApi = rtkAPI.injectEndpoints({
    endpoints: (build) => ({
        getArticleRecommendationsList: build.query<Article[], number>({
            query: (limit) => ({
                url: '/articles',
                params: {
                    _limit: limit
                }
            })
        })
    })
})

export const useArticleRecommendation = recommendationApi.useGetArticleRecommendationsListQuery
