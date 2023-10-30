import React, { createContext } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { GlobalStyles } from './styles/Global'
import { ContextProvider } from './context/ContextProvider'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
	<ContextProvider>
		<App auto='lada 2101' />
		<ToastContainer autoClose={1500} />
	</ContextProvider>
)
