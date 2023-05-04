import {type FC, memo, type MouseEventHandler} from 'react'
import {useTranslation} from 'react-i18next'
import GBFlag from '@/shared/assets/icons/gb_flag.png'
import RusFlag from '@/shared/assets/icons/rus_flag.png'
import {classNames} from '@/shared/lib/classNames/classNames'
import {Button, ButtonTheme} from '@/shared/ui/Button/Button'
import cls from './LangSelector.module.scss'

interface LangSelectorProps {
    className?: string
    short?: boolean
}

interface LangSelectorEventTarget extends EventTarget {
    alt: string
}

interface LangSelectorEvent extends React.MouseEvent<HTMLButtonElement> {
    target: LangSelectorEventTarget
}

export const LangSelector: FC<LangSelectorProps> = memo<LangSelectorProps>((props: LangSelectorProps) => {
    const {i18n} = useTranslation()

    const onSelect: MouseEventHandler<HTMLButtonElement> = (event: LangSelectorEvent): void => {
        if (i18n.language !== event.target.alt) {
            i18n.changeLanguage(event.target.alt)
        }
    }

    return (
        <div className={classNames(cls.LangSelector, {}, [props.className])}>
            <Button onClick={onSelect}
                theme={ButtonTheme.CLEAR_INVERTED}
            >
                <img className={classNames(cls.img, {[cls.active_lang]: i18n.language === 'ru'}, [])}
                    src={RusFlag}
                    alt={'ru'}/>
            </Button>
            <Button onClick={onSelect}
                theme={ButtonTheme.CLEAR_INVERTED}
            >
                <img className={classNames(cls.img, {[cls.active_lang]: i18n.language === 'en'}, [])}
                    src={GBFlag}
                    alt={'en'}/>
            </Button>
        </div>
    )
})

LangSelector.displayName = 'LangSelector'
