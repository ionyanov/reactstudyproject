import {type FC, memo} from 'react'
import {useTranslation} from 'react-i18next'
import {Page} from '@/widgets/Page'

interface AdminPanelPageProps {
    className?: string
}

const AdminPanelPage: FC<AdminPanelPageProps> = (props) => {
    const {t} = useTranslation()

    return (
        <Page className={props.className} data-testid={'AdminPanelPage'}>
            {t('Admin page')}
        </Page>
    )
}

export default memo(AdminPanelPage)
