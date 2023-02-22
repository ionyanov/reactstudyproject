import {BrowserRouter} from 'react-router-dom'
import {createRoot} from 'react-dom/client'
import App from 'app/App'
import 'app/styles/index.scss'
import {ThemeProvider} from 'app/providers/ThemeProvider'

import 'shared/config/i18n/i18n'
import {ErrorBoundary} from 'app/providers/ErrorBoundary'
import {StoreProvider} from 'app/providers/StoreProvider'

const container = document.getElementById('root')
const root = createRoot(container)
root.render(
    <StoreProvider>
        <BrowserRouter>
            <ErrorBoundary>
                <ThemeProvider>
                    <App/>
                </ThemeProvider>
            </ErrorBoundary>
        </BrowserRouter>
    </StoreProvider>
)
