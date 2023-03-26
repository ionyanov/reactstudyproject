import {type Story} from '@storybook/react'
import {type Theme, ThemeProvider} from 'shared/lib/providers/ThemeProvider'

export const ThemeDecorator: (theme: Theme) => (StoryComponent: Story) => JSX.Element = (theme: Theme) => {
    return function f (StoryComponent: Story) {
        return (
            <ThemeProvider initialTheme={theme}>
                <div className={`app ${theme}`}>
                    <StoryComponent/>
                </div>
            </ThemeProvider>
        )
    }
}
