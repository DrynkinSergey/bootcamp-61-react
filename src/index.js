import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
	<>
		<App auto='lada 2101' />
		<ToastContainer autoClose={1500} />
	</>
)
