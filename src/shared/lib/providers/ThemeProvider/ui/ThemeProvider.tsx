import React, {
    type FC,
    type PropsWithChildren,
    useEffect,
    useMemo,
    useState,
} from 'react';
import { useJsonSettings } from '@/entities/User';
import { Theme, ThemeContext } from '../lib/ThemeContext';

interface ThemeProviderProps extends PropsWithChildren {
    initialTheme?: Theme;
}

const ThemeProvider: FC<ThemeProviderProps> = ({ children, initialTheme }) => {
    const { theme: defaultTheme } = useJsonSettings();
    // (localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Theme);
    const [theme, setTheme] = useState<Theme>(
        initialTheme ?? defaultTheme ?? Theme.LIGHT,
    );
    const [isThemeInited, setIsThemeInited] = useState(false);
    const defaultProps = useMemo(() => ({ theme, setTheme }), [theme]);

    useEffect(() => {
        if (!isThemeInited && defaultTheme) {
            setTheme(defaultTheme);
            setIsThemeInited(true);
        }
    }, [isThemeInited, defaultTheme]);

    return (
        <ThemeContext.Provider value={defaultProps}>
            {children}
        </ThemeContext.Provider>
    );
};

export default ThemeProvider;
