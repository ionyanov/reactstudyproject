import {type FC, memo} from 'react'
import {useTranslation} from 'react-i18next'
import {classNames} from '@/shared/lib/classNames/classNames'
import {Button} from '@/shared/ui/Button/Button'
import cls from './PageError.module.scss'

interface PageErrorProps {
    className?: string
}

export const PageError: FC<PageErrorProps> = memo((props: PageErrorProps) => {
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
})

PageError.displayName = 'PageError'
