import React from 'react'
import {EditableProfileCard} from '../../src/features/EditableProfileCard'
import {TestProvider} from '../../src/shared/config/tests/componentRender/componentRender'

describe('EditableProfileCard.cy.tsx', () => {
    it('playground', () => {
        cy.intercept('GET', '**/profile/*', {fixture: 'profile.json'})
        cy.mount(
            <TestProvider
                options={{initialState: {user: {authData: {id: '1'}}}}}
            >
                <EditableProfileCard id={'1'}/>
            </TestProvider>
        )
    })
})
