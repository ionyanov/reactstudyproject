import React, { type FC, memo } from 'react';
import DarkIcon from '@/shared/assets/icons/dark-mode-toggle-icon.svg';
import LightIcon from '@/shared/assets/icons/light-mode-toggle-icon.svg';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Theme, useTheme } from '@/shared/lib/providers/ThemeProvider';
import { Button, ButtonTheme } from '@/shared/ui/Button';
import cls from './ThemeSwitcher.module.scss';

interface ThemeSwitcherProps {
    className?: string;
}

export const ThemeSwitcher: FC<ThemeSwitcherProps> = memo<ThemeSwitcherProps>(
    (props: ThemeSwitcherProps) => {
        const { theme, toggleTheme } = useTheme();

        return (
            <Button
                theme={ButtonTheme.CLEAR}
                onClick={toggleTheme}
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
