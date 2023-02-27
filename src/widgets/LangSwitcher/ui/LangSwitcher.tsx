import React, {type FC} from 'react'
import {classNames} from 'shared/lib/classNames/classNames'
import cls from './LangSwitcher.module.scss'
import {useTranslation} from 'react-i18next'
import {Button, ButtonTheme} from 'shared/ui/Button/Button'

interface LangSwitcherProps {
    className?: string;
    short?: boolean;
}

export const LangSwitcher: FC<LangSwitcherProps> = props => {
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
}
