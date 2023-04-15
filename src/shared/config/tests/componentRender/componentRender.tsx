import {type ReducersMapObject} from '@reduxjs/toolkit'
import {render, type RenderResult} from '@testing-library/react'
import {type ReactNode} from 'react'
import {I18nextProvider} from 'react-i18next'
import {MemoryRouter} from 'react-router-dom'
import {type StateSchema, StoreProvider} from '../../../lib/providers/StoreProvider'
import i18n4test from '../../i18n/i18n4test'

export interface ComponentRenderProps {
    route?: string
    initialState?: DeepPartial<StateSchema>
    asyncReducers?: DeepPartial<ReducersMapObject<StateSchema>>
}

export function ComponentRender (component: ReactNode, options: ComponentRenderProps = {route: '/'}): RenderResult {
    return render(
        <MemoryRouter initialEntries={[options.route || '/']}>
            <StoreProvider initialState={options.initialState} asyncRedusers={options.asyncReducers}>
                <I18nextProvider i18n={i18n4test}>
                    {component}
                </I18nextProvider>
            </StoreProvider>
        </MemoryRouter>
    )
}
