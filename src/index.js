import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { BrowserRouter } from 'react-router-dom'
import { UserProvider } from './context/UserProvider'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
	<BrowserRouter>
		<UserProvider>
			<App />
		</UserProvider>
		<ToastContainer autoClose={1500} />
	</BrowserRouter>
)
