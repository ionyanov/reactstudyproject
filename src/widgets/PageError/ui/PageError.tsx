import {type FC} from 'react'
import {classNames} from 'shared/lib/classNames/classNames'
import cls from './PageError.module.scss'
import {useTranslation} from 'react-i18next'
import {Button} from 'shared/ui/Button/Button'

interface PageErrorProps {
    className?: string
}

export const PageError: FC<PageErrorProps> = (props) => {
    const {t} = useTranslation()

    const reloadPage: () => void = () => {
        location.reload()
    }

    return (
        <div className={classNames(cls.PageError, {}, [props.className])}>
            <p>{t('Что-то пошло не так')}</p>
            <Button onClick={reloadPage}>
                {t('Обновить')}
            </Button>
        </div>
    )
}
