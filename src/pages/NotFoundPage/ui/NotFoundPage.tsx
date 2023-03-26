import {type FC} from 'react'
import {useTranslation} from 'react-i18next'
import {classNames} from 'shared/lib/classNames/classNames'
import {Page} from 'shared/ui/Page/Page'
import cls from './NotFoundPage.module.scss'

interface NotFoundPageProps {
    className?: string
}

export const NotFoundPage: FC<NotFoundPageProps> = (props) => {
    const {t} = useTranslation()

    return (
        <Page className={classNames(cls.notFoundPage, {}, [props.className])}>
            {t('Page not found')}
        </Page>
    )
}
