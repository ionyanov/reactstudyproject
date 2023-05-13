import type {User} from '../../../src/entities/User'
import {LOCALSTORAGE_USER_KEY} from '../../../src/shared/const/localstorage'
import Chainable = Cypress.Chainable

export function login (username = 'test', password = 'test'): Chainable<User> {
    return cy.request({
        method: 'POST',
        url: 'http://localhost:8000/login',
        body: {
            username,
            password
        }
    }).then(({body}) => {
        window.localStorage.setItem(LOCALSTORAGE_USER_KEY, JSON.stringify(body))
        return body
    })
}

declare global {
    namespace Cypress {
        interface Chainable {
            login(username?: string, password?: string): Chainable<User>
        }
    }
}
