import './styles/index.scss'
import React, {type FC, useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {Navbar} from '@/widgets/Navbar'
import {Sidebar} from '@/widgets/Sidebar'
import {getUserIsInit, userActions} from '@/entities/User'
import {AppRouter} from '@/shared/lib/providers/AppRouter'
import {classNames} from '../shared/lib/classNames/classNames'
import {useTheme} from '../shared/lib/providers/ThemeProvider/lib/useTheme'

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
