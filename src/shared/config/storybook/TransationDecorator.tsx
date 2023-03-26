import {type Story} from '@storybook/react'
import {Suspense} from 'react'
import {I18nextProvider} from 'react-i18next'
import i18n4test from 'shared/config/i18n/i18n4test'

export function TransationDecorator (StoryComponent: Story): JSX.Element {
    return (
        <I18nextProvider i18n={i18n4test}>
            <Suspense fallback="">
                <StoryComponent/>
            </Suspense>
        </I18nextProvider>
    )
}
