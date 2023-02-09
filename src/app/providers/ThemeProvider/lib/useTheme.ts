import { LOCAL_STORAGE_THEME_KEY, Theme, ThemeContext } from './ThemeContext'
import { useContext } from 'react'

interface UseThemeResult {
  theme: Theme
  toggleTheme: () => void
}

export function useTheme (): UseThemeResult {
  const { theme, setTheme } = useContext(ThemeContext)

  const toggleTheme: () => void = () => {
    const newTheme = theme === Theme.DARK ? Theme.LIGHT : Theme.DARK
    localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme)
    setTheme(newTheme)
  }

  return { theme, toggleTheme }
}
