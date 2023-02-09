import React, { type FC } from 'react'
import cls from './ThemeSwitcher.module.scss'
import { classNames } from 'shared/lib/classNames/classNames'
import { Theme, useTheme } from 'app/providers/ThemeProvider'
import DarkIcon from 'shared/assets/icons/dark-mode-toggle-icon.svg'
import LightIcon from 'shared/assets/icons/light-mode-toggle-icon.svg'
import { Button, ThemeButton } from 'shared/ui/Button/Button'

interface ThemeSwitcherProps {
  className?: string
}

export const ThemeSwitcher: FC = (props: ThemeSwitcherProps) => {
  const { theme, toggleTheme } = useTheme()

  return (
		<Button
			theme={ThemeButton.CLEAR}
			onClick={toggleTheme}
			className={classNames(cls.ThemeSwitcher, {}, [props.className])}>
			{theme === Theme.LIGHT ? <LightIcon width='30px'/> : <DarkIcon width='30px'/>}
		</Button>
  )
}
