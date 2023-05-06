import React, {type FC, memo, type ReactNode, Suspense, useCallback} from 'react'
import {Route, Routes} from 'react-router-dom'
import {routeConfig} from '@/app/router/routeConfig'
import PageLoader from '@/widgets/PageLoader'
import type {AppRouteProps} from '@/shared/types/router'
import {RequireAuth} from './RequireAuth'

const AppRouter: FC = () => {
    const renderWithWrapper = useCallback((route: AppRouteProps) => {
        const element: ReactNode = (
            <Suspense fallback={<PageLoader/>}>
                {route.element}
            </Suspense>
        )

        return <Route key={route.path}
            path={route.path}
            element={route.authOnly
                ? <RequireAuth roles={route.roles || []}>{element}</RequireAuth>
                : element}/>
    }, [])
    return (
        <Routes>
            {Object.values(routeConfig).map(renderWithWrapper)}
        </Routes>
    )
}

export default memo(AppRouter)
