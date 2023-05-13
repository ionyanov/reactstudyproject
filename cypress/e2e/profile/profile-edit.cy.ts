let profileid: string

describe('Пользователь заходит в свой профиль', () => {
    beforeEach(() => {
        cy.visit('')
        cy.login('admin', '123').then(data => {
            profileid = data.id
            cy.visit(`/profile/${profileid}`)
        })
    })

    afterEach(() => {
        cy.resetProfile(profileid)
    })
    it('Профиль открывается', () => {
        cy.getByTestId('ProfileCard.firstname.Input').should('exist')
    })
    it('и редактирует его', () => {
        const newFstName = 'firstAdmin'
        const newLstName = 'admin'
        cy.updateProfile(newFstName, newLstName)
        cy.getByTestId('ProfileCard.firstname.Input').should('have.value', newFstName)
        cy.getByTestId('ProfileCard.lastname.Input').should('have.value', newLstName)
    })
})
