import {type RouteProps} from 'react-router-dom'
import {AboutPage} from 'pages/AboutPage'
import {ArticleDetailsPage} from 'pages/ArticleDetailsPage'
import {ArticlesPage} from 'pages/ArticlesPage'
import {MainPage} from 'pages/MainPage'
import {NotFoundPage} from 'pages/NotFoundPage'
import {ProfilePage} from 'pages/ProfilePage'

export type AppRouteProps = RouteProps & {
    authOnly?: boolean
}

export enum AppRoutes {
    MAIN = 'main',
    ABOUT = 'about',
    PROFILE = 'profile',
    ARTICLES = 'articles',
    ARTICLES_DETAIL = 'article_details',
    // must be last
    NOTFOUND = 'notfaund',
}

export const RoutePath: Record<AppRoutes, string> = {
    [AppRoutes.MAIN]: '/',
    [AppRoutes.ABOUT]: '/about',
    [AppRoutes.PROFILE]: '/profile/', // + :id
    [AppRoutes.ARTICLES]: '/articles',
    [AppRoutes.ARTICLES_DETAIL]: '/articles/', // + :id
    // must be last
    [AppRoutes.NOTFOUND]: '*'
}

export const routeConfig: Record<AppRoutes, AppRouteProps> = {
    [AppRoutes.MAIN]: {
        path: RoutePath.main,
        element: <MainPage/>
    },
    [AppRoutes.ABOUT]: {
        path: RoutePath.about,
        element: <AboutPage/>
    },
    [AppRoutes.PROFILE]: {
        path: `${RoutePath.profile}:id`,
        element: <ProfilePage/>,
        authOnly: true
    },
    [AppRoutes.ARTICLES]: {
        path: RoutePath.articles,
        element: <ArticlesPage/>,
        authOnly: true
    },
    [AppRoutes.ARTICLES_DETAIL]: {
        path: `${RoutePath.article_details}:id`,
        element: <ArticleDetailsPage/>,
        authOnly: true
    },
    [AppRoutes.NOTFOUND]: {
        path: RoutePath.notfaund,
        element: <NotFoundPage/>
    }
}
