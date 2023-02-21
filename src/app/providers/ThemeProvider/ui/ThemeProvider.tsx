import React, {type FC, type PropsWithChildren, useMemo, useState} from 'react'
import {LOCAL_STORAGE_THEME_KEY, Theme, ThemeContext} from '../lib/ThemeContext'

const defaultTheme = localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Theme || Theme.LIGHT

interface ThemeProvaderProps extends PropsWithChildren {
    initialTheme?: Theme
}

const ThemeProvider: FC<ThemeProvaderProps> = ({children, initialTheme}) => {
    const [theme, setTheme] = useState<Theme>(initialTheme || defaultTheme)

    const defaultProps = useMemo(() => ({theme, setTheme}), [theme])

    return (
        <ThemeContext.Provider value={defaultProps}>
            {children}
        </ThemeContext.Provider>
    )
}

export default ThemeProvider
