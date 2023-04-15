import {type FC, memo} from 'react'
import {useTranslation} from 'react-i18next'
import {Page} from 'widgets/Page'

interface ForbiddenPageProps {
    className?: string
}

const ForbiddenPage: FC<ForbiddenPageProps> = (props) => {
    const {t} = useTranslation()

    return (
        <Page className={props.className}>
            {t('Доступ запрещен')}
        </Page>
    )
}

export default memo(ForbiddenPage)
