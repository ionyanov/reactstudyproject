import React, { type FC } from 'react'
import cls from './navbar.module.scss'
import { classNames } from 'shared/lib/classNames/classNames'
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink'
import { useTranslation } from 'react-i18next'

interface NavbarProps {
  className?: string
}

export const Navbar: FC<NavbarProps> = (props) => {
  const { t } = useTranslation()

  return (
		<div className={classNames(cls.navbar, {}, [props.className])}>
			<div className={cls.links}>
				<AppLink theme={AppLinkTheme.SECONDARY} to={'/'} className={cls.link}>
					{t('Main')}</AppLink>
				<AppLink theme={AppLinkTheme.SECONDARY} to={'/about'} className={cls.link}>
					{t('About')}</AppLink>
			</div>
		</div>
  )
}
