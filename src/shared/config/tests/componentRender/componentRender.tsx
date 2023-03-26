import {render, type RenderResult} from '@testing-library/react'
import {type ReactNode} from 'react'
import {I18nextProvider} from 'react-i18next'
import {MemoryRouter} from 'react-router-dom'
import i18n4test from 'shared/config/i18n/i18n4test'
import {type StateSchema, StoreProvider} from 'shared/lib/providers/StoreProvider'

export interface ComponentRenderProps {
    route: string
    initialState?: DeepPartial<StateSchema>
}

export function ComponentRender (component: ReactNode, options: ComponentRenderProps = {route: '/'}): RenderResult {
    return render(
        <MemoryRouter initialEntries={[options.route]}>
            <StoreProvider initialState={options.initialState}>
                <I18nextProvider i18n={i18n4test}>
                    {component}
                </I18nextProvider>
            </StoreProvider>
        </MemoryRouter>
    )
}
