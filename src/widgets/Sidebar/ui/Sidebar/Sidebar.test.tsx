import {fireEvent, screen} from '@testing-library/react'
import {Sidebar} from './Sidebar'
import {renderWithTranslation} from 'shared/lib/tests/RenderWithTranslation/renderWithTranslation'

describe('Sidebar', () => {
    test('Sidebar exists', async () => {
        renderWithTranslation(<Sidebar/>)
        expect(screen.getByTestId('sidebar')).toBeInTheDocument()
    })

    test('test toggle', () => {
        renderWithTranslation(<Sidebar/>)
        const bnt = screen.getByTestId('sidebar-toggle')
        expect(bnt).toBeInTheDocument()
        fireEvent.click(bnt)
        expect(screen.getByTestId('sidebar')).toHaveClass('collapsed')
    })
})
