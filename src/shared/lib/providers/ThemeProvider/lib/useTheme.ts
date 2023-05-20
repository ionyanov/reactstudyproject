import { useContext } from 'react';
import { LOCAL_STORAGE_THEME_KEY, Theme, ThemeContext } from './ThemeContext';

interface UseThemeResult {
    theme: Theme;
    toggleTheme: (saveAction?: (theme: Theme) => void) => void;
}

export function useTheme(): UseThemeResult {
    const { theme, setTheme } = useContext(ThemeContext);

    function toggleTheme(saveAction?: (theme: Theme) => void): void {
        const newTheme = theme === Theme.DARK ? Theme.LIGHT : Theme.DARK;
        setTheme(newTheme);
        saveAction?.(newTheme);
        document.body.className = newTheme;

        localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme);
    }

    return { theme, toggleTheme };
}
