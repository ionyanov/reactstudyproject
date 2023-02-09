import React, { type FC } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import cls from './LangSwitcher.module.scss'
import { useTranslation } from 'react-i18next'
import { Button } from 'shared/ui/Button/Button'

interface LangSwitcherProps {
  className?: string
}

export const LangSwitcher: FC<LangSwitcherProps> = props => {
  const { t, i18n } = useTranslation()

  const toggle = (): void => {
    i18n.changeLanguage(i18n.language === 'ru-RU' ? 'en' : 'ru-RU')
  }

  return (
		<div className={classNames(cls.langswitcher, {}, [props.className])}>
			<Button onClick={toggle}>{t(i18n.language === 'ru-RU' ? 'en' : 'ru-RU')}</Button>
		</div>
  )
}
