export function updateProfile (newFirstName = 'newFirstName', newLastName = 'newLastName'): void {
    cy.get('[data-testid="EditableProfileCard.Edit"]').click()
    cy.getByTestId('ProfileCard.firstname.Input').clear().type(newFirstName)
    cy.getByTestId('ProfileCard.lastname.Input').clear().type(newLastName)
    cy.get('[data-testid="EditableProfileCard.Save"]').click()
}

export function resetProfile (profileId: string): void {
    cy.request({
        method: 'PUT',
        url: `http://localhost:8000/profile/${profileId}`,
        headers: {Authorization: 'asdf'},
        body: {
            id: '1',
            firstname: 'firstname',
            lastname: 'lastname1',
            age: 18,
            currency: 'USD',
            country: 'Armenia',
            city: 'Moscow',
            username: 'admin',
            avatar: 'https://thumbs.dreamstime.com/z/%D0%B0%D0%B2%D0%B0%D1%82%D0%B0%D1%80-%D1%81%D1%82%D0%BE%D1%80%D0%BE%D0%BD%D1%8B-%D1%87%D0%B5%D0%BB%D0%BE%D0%B2%D0%B5%D0%BA%D0%B0-%D1%81-%D0%B1%D0%BE%D1%80%D0%BE%D0%B4%D0%BE%D0%B9-%D0%BC%D1%83%D0%B6%D1%81%D0%BA%D0%BE%D0%B9-%D0%BF%D0%BE%D1%80%D1%82%D1%80%D0%B5%D1%82-%D0%B8%D0%BB%D0%BB%D1%8E%D1%81%D1%82%D1%80%D0%B0%D1%86%D0%B8%D1%8F-%D0%B2%D0%B5%D0%BA%D1%82%D0%BE%D1%80%D0%B0-186026145.jpg'
        }
    })
}

declare global {
    namespace Cypress {
        interface Chainable {
            updateProfile(newFirstName?: string, newLastName?: string): ReturnType<typeof cy.get>

            resetProfile(profileId: string): void
        }
    }
}
