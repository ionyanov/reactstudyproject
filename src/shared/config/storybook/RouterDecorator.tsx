import { type Story } from '@storybook/react';
import React from 'react';
import { MemoryRouter, Route, Routes } from 'react-router-dom';

export function RouterDecorator(StoryComponent: Story): JSX.Element {
    return (
        <MemoryRouter initialEntries={['/path/id']}>
            <Routes>
                <Route path="/path/:id" element={<StoryComponent />} />
            </Routes>
        </MemoryRouter>
    );
}
