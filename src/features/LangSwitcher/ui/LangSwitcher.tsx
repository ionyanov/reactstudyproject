import React, {type FC, memo} from 'react'
import {useTranslation} from 'react-i18next'
import {classNames} from 'shared/lib/classNames/classNames'
import {Button, ButtonTheme} from 'shared/ui/Button/Button'
import cls from './LangSwitcher.module.scss'

interface LangSwitcherProps {
    className?: string
    short?: boolean
}

export const LangSwitcher: FC<LangSwitcherProps> = memo<LangSwitcherProps>((props: LangSwitcherProps) => {
    const {t, i18n} = useTranslation()

    const toggle = (): void => {
        i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru')
    }

    return (
        <div className={classNames(cls.langswitcher, {}, [props.className])}>
            <Button
                onClick={toggle}
                theme={ButtonTheme.BACKGROUND_INVERTED}
            >{t(props.short ? 'Короткий язык' : 'Язык')}</Button>
        </div>
    )
})
LangSwitcher.displayName = 'LangSwitcher'
