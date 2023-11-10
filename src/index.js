import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { Provider } from 'react-redux'
import { store } from './redux'
import { BrowserRouter } from 'react-router-dom'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
	// Огортаємо провайдером наш апп щоб отримати доступ до стору. Передаємо пропсом створений стейт
	<BrowserRouter>
		<Provider store={store}>
			<App />
			<ToastContainer autoClose={1500} />
		</Provider>
	</BrowserRouter>
)
