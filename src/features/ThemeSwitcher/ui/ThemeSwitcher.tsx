import React, { type FC, memo, useCallback } from 'react';
import { saveJsonSettings } from '@/entities/User';
import DarkIcon from '@/shared/assets/icons/dark-mode-toggle-icon.svg';
import LightIcon from '@/shared/assets/icons/light-mode-toggle-icon.svg';
import { classNames } from '@/shared/lib/classNames/classNames';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { Theme, useTheme } from '@/shared/lib/providers/ThemeProvider';
import { Button, ButtonTheme } from '@/shared/ui/Button';
import cls from './ThemeSwitcher.module.scss';

interface ThemeSwitcherProps {
    className?: string;
}

export const ThemeSwitcher: FC<ThemeSwitcherProps> = memo<ThemeSwitcherProps>(
    (props: ThemeSwitcherProps) => {
        const { theme, toggleTheme } = useTheme();
        const dispatch = useAppDispatch();

        const onToggleTheme = useCallback(() => {
            toggleTheme((newTheme: Theme) => {
                dispatch(saveJsonSettings({ theme: newTheme }));
            });
        }, [dispatch, toggleTheme]);

        return (
            <Button
                theme={ButtonTheme.CLEAR}
                onClick={onToggleTheme}
                className={classNames(cls.themeswitcher, {}, [
                    props.className,
                ])}>
                {theme === Theme.LIGHT ? (
                    <LightIcon className="themeicon" />
                ) : (
                    <DarkIcon className="themeicon" />
                )}
            </Button>
        );
    },
);

ThemeSwitcher.displayName = 'ThemeSwitcher';
