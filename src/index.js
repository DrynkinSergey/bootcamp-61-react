import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { Provider } from 'react-redux'
import { persistor, store } from './redux/store'
import { PersistGate } from 'redux-persist/integration/react'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
	// Огортаємо провайдером наш апп щоб отримати доступ до стору. Передаємо пропсом створений стейт
	<Provider store={store}>
		<PersistGate loading={null} persistor={persistor}>
			<App />
			<ToastContainer autoClose={1500} />
		</PersistGate>
	</Provider>
)
