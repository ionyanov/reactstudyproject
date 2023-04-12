import 'app/styles/index.scss'
import {type Story} from '@storybook/react'

export function StyleDecorator (StoryComponent: Story): JSX.Element {
    return (
        <div style={{padding: 10, width: '98%'}}>
            <StoryComponent/>
        </div>
    )
}
