import {selectByTestId} from '../../helpers/selectByTestId'
import Chainable = Cypress.Chainable

export function getByTestId (testId: string): Chainable<JQuery<HTMLElement>> {
    return cy.get(selectByTestId(testId))
}

declare global {
    namespace Cypress {
        interface Chainable {
            getByTestId(testId: string): Chainable<JQuery<HTMLElement>>
        }
    }
}
