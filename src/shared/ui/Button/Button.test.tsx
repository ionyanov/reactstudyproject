import { render, screen, waitFor } from '@testing-library/react';
import { Button, ButtonTheme } from './Button';

describe('Button', () => {
    test('Button exists', () => {
        render(<Button>Test</Button>);

        waitFor(() => {
            expect(screen.getAllByText('Test')).toBeInTheDocument();
        });
    });

    test('Has thee clear', () => {
        render(<Button theme={ButtonTheme.CLEAR}>Test</Button>);

        waitFor(() => {
            expect(screen.getAllByText('Test')).toHaveClass('clear');
        });
    });
});
