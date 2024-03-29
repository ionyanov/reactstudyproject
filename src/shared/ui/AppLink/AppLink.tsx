import type { FC, ForwardedRef } from 'react';
import { forwardRef } from 'react';
import { Link, type LinkProps } from 'react-router-dom';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './AppLink.module.scss';

export enum AppLinkTheme {
    PRIMARY = 'primary',
    SECONDARY = 'secondary',
}

type AppLinkProps = {
    className?: string;
    theme?: AppLinkTheme;
} & LinkProps;

export const AppLink: FC<AppLinkProps> = forwardRef(
    (props, ref: ForwardedRef<HTMLAnchorElement>) => {
        const {
            to,
            children,
            className = '',
            theme = AppLinkTheme.PRIMARY,
            ...otherProps
        } = props;

        return (
            <Link
                to={to}
                className={classNames(cls.applink, {}, [className, cls[theme]])}
                {...otherProps}
                ref={ref}>
                {children}
            </Link>
        );
    },
);
