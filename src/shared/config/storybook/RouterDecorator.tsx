import 'app/styles/index.scss'
import {type Story} from '@storybook/react'
import {MemoryRouter, Route, Routes} from 'react-router-dom'
import React from 'react'

export function RouterDecorator (StoryComponent: Story): JSX.Element {
    return (
        <MemoryRouter initialEntries={['/path/id']}>
            <Routes>
                <Route path="/path/:id" element={<StoryComponent/>}/>
            </Routes>
        </MemoryRouter>
    )
}
