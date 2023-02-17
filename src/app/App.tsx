import React, {type FC} from 'react'
import {useTheme} from './providers/ThemeProvider/lib/useTheme'
import {classNames} from '../shared/lib/classNames/classNames'
import {AppRouter} from 'app/providers/AppRouter'
import {Navbar} from 'widgets/Navbar'
import {Sidebar} from 'widgets/Sidebar'

const App: FC = () => {
    const {theme} = useTheme()

    return (
        <div className={classNames('app', {}, [theme])}>
            <Navbar/>
            <div className='content-page'>
                <Sidebar/>
                <AppRouter/>
            </div>
        </div>
    )
}

export default App
