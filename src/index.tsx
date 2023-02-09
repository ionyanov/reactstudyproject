import { BrowserRouter } from 'react-router-dom'
import { createRoot } from 'react-dom/client'
import App from 'app/App'
import 'app/styles/index.scss'
import { ThemeProvider } from 'app/providers/ThemeProvider'

import 'shared/config/i18n/i18n'

const container = document.getElementById('root')
const root = createRoot(container)
root.render(
	<BrowserRouter>
		<ThemeProvider>
			<App/>
		</ThemeProvider>
	</BrowserRouter>
)
