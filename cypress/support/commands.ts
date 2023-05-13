import * as articleCommands from './commands/article'
import * as commentsCommands from './commands/comments'
import {getByTestId} from './commands/getByTestId'
import {login} from './commands/login'
import * as profileCommands from './commands/profile'
import * as rateCommands from './commands/rating'

Cypress.Commands.add('login', login)
Cypress.Commands.add('getByTestId', getByTestId)
Cypress.Commands.addAll(profileCommands)
Cypress.Commands.addAll(articleCommands)
Cypress.Commands.addAll(rateCommands)
Cypress.Commands.addAll(commentsCommands)
