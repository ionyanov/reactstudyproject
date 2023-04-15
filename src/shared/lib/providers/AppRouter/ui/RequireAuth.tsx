import {useMemo} from 'react'
import {useSelector} from 'react-redux'
import {Navigate, useLocation} from 'react-router-dom'
import {getUserAuthData, getUserRoles, type UserRole} from 'entities/User'
import {RoutePath} from '../../../../config/routeConfig/routeConfig'

interface RequireAuthProps {
    children: JSX.Element
    roles: UserRole[]
}

export function RequireAuth (props: RequireAuthProps): JSX.Element {
    const auth = useSelector(getUserAuthData)
    const userRoles = useSelector(getUserRoles)
    const location = useLocation()

    const hasRequireRoles = useMemo(() => {
        if (props.roles) {
            props.roles.some(role => {
                return userRoles.includes(role)
            })
        }
        return true
    }, [userRoles, props])

    if (!auth) {
        return <Navigate to={RoutePath.main} state={{from: location}} replace/>
    }
    if (!hasRequireRoles) {
        return <Navigate to={RoutePath.forbidden} state={{from: location}} replace/>
    }
    return props.children
}
