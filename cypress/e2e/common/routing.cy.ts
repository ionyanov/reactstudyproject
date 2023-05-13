describe('App Routing', () => {
    describe('Пользователь не авторизован', () => {
        it('Open main url', () => {
            cy.visit('/');
            cy.getByTestId('MainPage').should('exist');
        });

        it('Open profile page', () => {
            cy.visit('/profile/1');
            cy.getByTestId('MainPage').should('exist');
        });

        it('Open unexisting page', () => {
            cy.visit('/unexisting');
            cy.getByTestId('NotFoundPage').should('exist');
        });
    });

    describe('Пользователь авторизован', () => {
        it('Open profile page', () => {
            cy.login('admin', '123');
            cy.visit('/profile/1');
            cy.getByTestId('ProfilePage').should('exist');
        });
    });
});
