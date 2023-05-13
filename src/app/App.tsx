import './styles/index.scss'
import React, {type FC, useEffect} from 'react'
import {useSelector} from 'react-redux'
import {Navbar} from '@/widgets/Navbar'
import {Sidebar} from '@/widgets/Sidebar'
import {getUserIsInit, userActions} from '@/entities/User'
import {classNames} from '@/shared/lib/classNames/classNames'
import {useAppDispatch} from '@/shared/lib/hooks/useAppDispatch/useAppDispatch'
import {useTheme} from '@/shared/lib/providers/ThemeProvider/lib/useTheme'
import {AppRouter} from './providers/AppRouter'

const App: FC = () => {
    const {theme} = useTheme()
    const dispatch = useAppDispatch()
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
