import React, {type FC} from 'react'
import {useTranslation} from 'react-i18next'
import {Page} from 'shared/ui/Page/Page'

const MainPage: FC = () => {
    const {t} = useTranslation()

    return (
        <Page>
            {t('Main')}
        </Page>
    )
}

export default MainPage
