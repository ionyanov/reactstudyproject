import {type Story} from '@storybook/react'
import i18n4test from 'shared/config/i18n/i18n4test'
import {I18nextProvider} from 'react-i18next'
import {Suspense} from 'react'

export function TransationDecorator (StoryComponent: Story): JSX.Element {
    return (
        <I18nextProvider i18n={i18n4test}>
            <Suspense fallback="">
                <StoryComponent/>
            </Suspense>
        </I18nextProvider>
    )
}
