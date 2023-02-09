import React, { type FC, useState } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import cls from './Sidebar.module.scss'
import { Button } from 'shared/ui/Button/Button'
import { ThemeSwitcher } from 'widgets/ThemeSwitcher/ui/ThemeSwitcher'
import { useTranslation } from 'react-i18next'
import { LangSwitcher } from 'widgets/LangSwitcher/ui/LangSwitcher'

interface SidebarProps {
  className?: string
}

export const Sidebar: FC<SidebarProps> = props => {
  const [collapsed, setCollapsed] = useState(false)
  const { t } = useTranslation()

  const onToggle = (): void => {
    setCollapsed(prev => !prev)
  }

  return (
		<div className={classNames(cls.Sidebar, { [cls.collapsed]: collapsed }, [props.className])}>
			<Button onClick={onToggle}>{t('Collapse')}</Button>
			<div className={cls.switchers}>
				<ThemeSwitcher/>
				<LangSwitcher/>
			</div>
		</div>
  )
}
