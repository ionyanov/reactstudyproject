import React, {type FC, memo, Suspense, useMemo} from 'react'
import {Route, Routes} from 'react-router-dom'
import {routeConfig} from 'shared/config/routeConfig/routeConfig'
import PageLoader from 'widgets/PageLoader'
import {useSelector} from 'react-redux'
import {getUserAuthData} from 'entities/User'

const AppRouter: FC = () => {
    const isAuth = useSelector(getUserAuthData)

    const routes = useMemo(() => {
        return Object.values(routeConfig).filter(route => {
            return !(route.authOnly && !isAuth)
        })
    }, [isAuth])
    return (
        <Routes> {
            routes.map(route =>
                <Route key={route.path}
                    path={route.path}
                    element={(
                        <Suspense fallback={<PageLoader/>}>
                            <div className='page-wrapper'>
                                {route.element}
                            </div>
                        </Suspense>
                    )}/>
            )
        }
        </Routes>
    )
}

export default memo(AppRouter)
