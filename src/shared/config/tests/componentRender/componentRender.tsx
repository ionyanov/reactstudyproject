import {type ReactNode} from 'react'
import {render, type RenderResult} from '@testing-library/react'
import {I18nextProvider} from 'react-i18next'
import i18n4test from 'shared/config/i18n/i18n4test'
import {MemoryRouter} from "react-router-dom";

export interface ComponentRenderProps {
    route: string;
}

export function ComponentRender(component: ReactNode, opitons: ComponentRenderProps = {route: '/'}): RenderResult {
    return render(
        <MemoryRouter initialEntries={[opitons.route]}>
            <I18nextProvider i18n={i18n4test}>
                {component}
            </I18nextProvider>
        </MemoryRouter>
    )
}
