import type { Theme } from '@/shared/lib/providers/ThemeProvider';

export interface JsonSettings {
    theme?: Theme;
    isFirstVisit?: boolean;
    settingsPageHasBeenOpen?: boolean;
    articlesPageHasBeenOpen?: boolean;
}
