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

interface TestProviderProps {
    children: ReactNode
    options?: ComponentRenderProps
}

export function TestProvider (props: TestProviderProps): JSX.Element {
    return (<MemoryRouter initialEntries={[props.options?.route ?? '/']}>
        <StoreProvider initialState={props.options?.initialState} asyncRedusers={props.options?.asyncReducers}>
            <I18nextProvider i18n={i18n4test}>
                {props.children}
            </I18nextProvider>
        </StoreProvider>
    </MemoryRouter>)
}

export function ComponentRender (component: ReactNode, options: ComponentRenderProps = {route: '/'}): RenderResult {
    return render(<TestProvider options={options}>{component}</TestProvider>)
}
