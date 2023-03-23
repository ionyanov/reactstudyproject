import React, {type FC, useEffect} from 'react'
import {useTheme} from './providers/ThemeProvider/lib/useTheme'
import {classNames} from '../shared/lib/classNames/classNames'
import {AppRouter} from 'app/providers/AppRouter'
import {Navbar} from 'widgets/Navbar'
import {Sidebar} from 'widgets/Sidebar'
import {useDispatch, useSelector} from 'react-redux'
import {getUserIsInit, userActions} from 'entities/User'

const App: FC = () => {
    const {theme} = useTheme()
    const dispatch = useDispatch()
    const isInit = useSelector(getUserIsInit)

    useEffect(() => {
        dispatch(userActions.initAuthData())
    }, [dispatch])

    return (
        <div className={classNames('app', {}, [theme])}>
            <Navbar/>
            <div className='content-page'>
                <Sidebar/>
                {isInit && <AppRouter/>}
            </div>
        </div>
    )
}

export default App
