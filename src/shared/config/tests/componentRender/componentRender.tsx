import {type ReactNode} from 'react'
import {render, type RenderResult} from '@testing-library/react'
import {I18nextProvider} from 'react-i18next'
import i18n4test from 'shared/config/i18n/i18n4test'
import {MemoryRouter} from 'react-router-dom'
import {type StateShema, StoreProvider} from 'app/providers/StoreProvider'

export interface ComponentRenderProps {
    route: string
    initialState?: DeepPartial<StateShema>
}

export function ComponentRender (component: ReactNode, options: ComponentRenderProps = {route: '/'}): RenderResult {
    return render(
        <StoreProvider initialState={options.initialState}>
            <MemoryRouter initialEntries={[options.route]}>
                <I18nextProvider i18n={i18n4test}>
                    {component}
                </I18nextProvider>
            </MemoryRouter>
        </StoreProvider>
    )
}
