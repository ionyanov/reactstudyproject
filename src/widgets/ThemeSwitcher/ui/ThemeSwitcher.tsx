import React, {type FC} from 'react'
import cls from './ThemeSwitcher.module.scss'
import {classNames} from 'shared/lib/classNames/classNames'
import {Theme, useTheme} from 'app/providers/ThemeProvider'
import DarkIcon from 'shared/assets/icons/dark-mode-toggle-icon.svg'
import LightIcon from 'shared/assets/icons/light-mode-toggle-icon.svg'
import {Button, ButtonTheme} from 'shared/ui/Button/Button'

interface ThemeSwitcherProps {
    className?: string
}

export const ThemeSwitcher: FC = (props: ThemeSwitcherProps) => {
    const {theme, toggleTheme} = useTheme()

    return (
        <Button
            theme={ButtonTheme.CLEAR}
            onClick={toggleTheme}
            className={classNames(cls.themeswitcher, {}, [props.className])}>
            {theme === Theme.LIGHT ?
                <LightIcon className='themeicon'/> :
                <DarkIcon className='themeicon'/>}
        </Button>
    )
}
