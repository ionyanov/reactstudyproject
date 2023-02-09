import cls from './AppLink.module.scss'
import { classNames } from 'shared/lib/classNames/classNames'
import { Link, type LinkProps } from 'react-router-dom'
import { type FC } from 'react'

export enum AppLinkTheme {
  PRIMARY = 'primary',
  SECONDARY = 'secondary',
}

type AppLinkProps = {
  className?: string
  theme?: AppLinkTheme
} & LinkProps

export const AppLink: FC<AppLinkProps> = props => {
  const {
    to,
    children,
    className,
    theme = AppLinkTheme.PRIMARY,
    ...otherProps
  } = props

  return (
		<Link
			to={to}
			className={classNames(cls.applink, {}, [className, cls[theme]])}
			{...otherProps}
		>
			{children}
		</Link>
  )
}
