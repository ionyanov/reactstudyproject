import {AboutPage} from '@/pages/AboutPage'
import {AdminPanelPage} from '@/pages/AdminPanelPage'
import {ArticleDetailsPage} from '@/pages/ArticleDetailsPage'
import {ArticleEditPage} from '@/pages/ArticleEditPage'
import {ArticlesPage} from '@/pages/ArticlesPage'
import {ForbiddenPage} from '@/pages/ForbiddenPage'
import {MainPage} from '@/pages/MainPage'
import {NotFoundPage} from '@/pages/NotFoundPage'
import {ProfilePage} from '@/pages/ProfilePage'
import {UserRole} from '@/entities/User'
import {AppRoutes, RoutePath} from '@/shared/const/router'
import type {AppRouteProps} from '@/shared/types/router'

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
    [AppRoutes.ARTICLES_EDIT]: {
        path: `${RoutePath.article_edit}`,
        element: <ArticleEditPage/>,
        authOnly: true
    },
    [AppRoutes.ARTICLES_CREATE]: {
        path: `${RoutePath.article_create}`,
        element: <ArticleEditPage/>,
        authOnly: true
    },
    [AppRoutes.ADMIN_PANEL]: {
        path: `${RoutePath.admin_panel}`,
        element: <AdminPanelPage/>,
        authOnly: true,
        roles: [UserRole.ADMIN]
    },
    [AppRoutes.FORBIDDEN]: {
        path: `${RoutePath.forbidden}`,
        element: <ForbiddenPage/>
    },

    [AppRoutes.NOTFOUND]: {
        path: RoutePath.notfaund,
        element: <NotFoundPage/>
    }
}
