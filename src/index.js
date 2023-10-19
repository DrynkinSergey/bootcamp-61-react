import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { GlobalStyles } from './styles/Global'
import { ThemeProvider } from 'styled-components'
import { darkTheme, theme } from './styles/theme'
const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
	<ThemeProvider theme={theme}>
		<App />
		<GlobalStyles />
	</ThemeProvider>
)
