import 'app/styles/index.scss'
import {type Story} from '@storybook/react'
import {type Theme} from 'app/providers/ThemeProvider'

export const ThemeDecorator: (theme: Theme) => (StoryComponent: Story) => JSX.Element = (theme: Theme) => {
    return function f (StoryComponent: Story) {
        return (
            <div className={`app ${theme}`}>
                <StoryComponent/>
            </div>
        )
    }
}
