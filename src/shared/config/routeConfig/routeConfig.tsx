import {type RouteProps} from 'react-router-dom'
import {MainPage} from 'pages/mainPage'
import {AboutPage} from 'pages/aboutPage'
import {NotFoundPage} from 'pages/notFoundpage'

export enum AppRoutes {
    MAIN = 'main',
    ABOUT = 'about',
    NOTFOUND = 'notfaund'
}

export const RoutePath: Record<AppRoutes, string> = {
    [AppRoutes.MAIN]: '/',
    [AppRoutes.ABOUT]: '/about',
    [AppRoutes.NOTFOUND]: '*'
}

export const routeConfig: Record<AppRoutes, RouteProps> = {
    [AppRoutes.MAIN]: {
        path: RoutePath.main,
        element: <MainPage/>
    },
    [AppRoutes.ABOUT]: {
        path: RoutePath.about,
        element: <AboutPage/>
    },
    [AppRoutes.NOTFOUND]: {
        path: RoutePath.notfaund,
        element: <NotFoundPage />
    }
}
