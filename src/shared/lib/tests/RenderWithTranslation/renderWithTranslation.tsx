import {type ReactNode} from 'react'
import {render, type RenderResult} from '@testing-library/react'
import {I18nextProvider} from 'react-i18next'
import i18n4test from 'shared/config/i18n/i18n4test'

export function renderWithTranslation (component: ReactNode): RenderResult {
    return render(
        <I18nextProvider i18n={i18n4test}>
            {component}
        </I18nextProvider>
    )
}
