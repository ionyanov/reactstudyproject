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
import {
    AppRoutes,
    getRouteAbout,
    getRouteAdmin,
    getRouteArticleCreate,
    getRouteArticleDetail,
    getRouteArticleEdit,
    getRouteArticles,
    getRouteForbidden,
    getRouteMain,
    getRouteNotfound,
    getRouteProfile
} from '@/shared/const/router'
import type {AppRouteProps} from '@/shared/types/router'

export const routeConfig: Record<AppRoutes, AppRouteProps> = {
    [AppRoutes.MAIN]: {
        path: getRouteMain(),
        element: <MainPage/>
    },
    [AppRoutes.ABOUT]: {
        path: getRouteAbout(),
        element: <AboutPage/>
    },
    [AppRoutes.PROFILE]: {
        path: getRouteProfile(':id'),
        element: <ProfilePage/>,
        authOnly: true
    },
    [AppRoutes.ARTICLES]: {
        path: getRouteArticles(),
        element: <ArticlesPage/>,
        authOnly: true
    },
    [AppRoutes.ARTICLES_DETAIL]: {
        path: getRouteArticleDetail(':id'),
        element: <ArticleDetailsPage/>,
        authOnly: true
    },
    [AppRoutes.ARTICLES_EDIT]: {
        path: getRouteArticleEdit(':id'),
        element: <ArticleEditPage/>,
        authOnly: true
    },
    [AppRoutes.ARTICLES_CREATE]: {
        path: getRouteArticleCreate(),
        element: <ArticleEditPage/>,
        authOnly: true
    },
    [AppRoutes.ADMIN_PANEL]: {
        path: getRouteAdmin(),
        element: <AdminPanelPage/>,
        authOnly: true,
        roles: [UserRole.ADMIN]
    },
    [AppRoutes.FORBIDDEN]: {
        path: getRouteForbidden(),
        element: <ForbiddenPage/>
    },

    [AppRoutes.NOTFOUND]: {
        path: getRouteNotfound(),
        element: <NotFoundPage/>
    }
}
