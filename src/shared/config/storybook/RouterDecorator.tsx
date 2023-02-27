import 'app/styles/index.scss'
import {type Story} from '@storybook/react'
import {BrowserRouter} from 'react-router-dom'

export function RouterDecorator (StoryComponent: Story): JSX.Element {
    return (
        <BrowserRouter>
            <StoryComponent/>
        </BrowserRouter>
    )
}
