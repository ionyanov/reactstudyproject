import {type StateSchema} from 'app/providers/StoreProvider'
import {getArticleDetailsData, getArticleDetailsError, getArticleDetailsIsLoading} from './articaleDetails'

describe('getArticleDetailsData', () => {
    test('Should return error', () => {
        const state: DeepPartial<StateSchema> = {
            articleDetail: {
                data: {
                    id: 'id',
                    title: 'title',
                    subtitle: 'subtitle'
                }
            }
        }
        expect(getArticleDetailsData(state as StateSchema)).toEqual(state.articleDetail?.data)
    })

    test('Should work with empty state', () => {
        const state: DeepPartial<StateSchema> = {}
        expect(getArticleDetailsData(state as StateSchema)).toEqual(undefined)
    })
})

describe('getArticleDetailsError', () => {
    test('Should return error', () => {
        const state: DeepPartial<StateSchema> = {
            articleDetail: {
                error: 'error'
            }
        }
        expect(getArticleDetailsError(state as StateSchema)).toEqual('error')
    })

    test('Should work with empty state', () => {
        const state: DeepPartial<StateSchema> = {}
        expect(getArticleDetailsError(state as StateSchema)).toEqual('')
    })
})

describe('getArticleDetailsIsLoading', () => {
    test('Should return error', () => {
        const state: DeepPartial<StateSchema> = {
            articleDetail: {
                isLoading: true
            }
        }
        expect(getArticleDetailsIsLoading(state as StateSchema)).toEqual(true)
    })

    test('Should work with empty state', () => {
        const state: DeepPartial<StateSchema> = {}
        expect(getArticleDetailsIsLoading(state as StateSchema)).toEqual(false)
    })
})
