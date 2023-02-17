import {render, screen, waitFor} from '@testing-library/react'
import {Button, ThemeButton} from 'shared/ui/Button/Button'

describe('Button', () => {
    test('Button exists', () => {
        render(<Button>Test</Button>)

        waitFor(() => { expect(screen.getAllByText('Test')).toBeInTheDocument() })
    })

    test('Has thee clear', () => {
        render(<Button theme={ThemeButton.CLEAR}>Test</Button>)

        waitFor(() => {
            expect(screen.getAllByText('Test')).toHaveClass('clear')
        })
        screen.debug()
    })
})
