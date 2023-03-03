import {fireEvent, screen} from '@testing-library/react'
import {Sidebar} from './Sidebar'
import {ComponentRender} from 'shared/config/tests/componentRender/componentRender'

describe('Sidebar', () => {
    test('Sidebar exists', async () => {
        ComponentRender(<Sidebar/>)
        expect(screen.getByTestId('sidebar')).toBeInTheDocument()
    })

    test('test toggle', () => {
        ComponentRender(<Sidebar/>)
        const bnt = screen.getByTestId('sidebar-toggle')
        expect(bnt).toBeInTheDocument()
        fireEvent.click(bnt)
        expect(screen.getByTestId('sidebar')).toHaveClass('collapsed')
    })
})
