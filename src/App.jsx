import { Link, Navigate, Route, Routes } from 'react-router-dom'
import colors from './assets/colors.json'
import { Layout } from './components/Layout'
import { Home } from './pages/Home'
import { About } from './pages/About'
import Users from './pages/Users'
import NotFound from './pages/NotFound'
import DetailsUser from './pages/DetailsUser'
import { ColorPicker } from './components/ColorPicker/ColorPicker'
const App = () => {
	return (
		<>
			<Routes>
				<Route path='/' element={<Layout />}>
					<Route index element={<Home />} />
					<Route path='about' element={<About />} />
					<Route path='users' element={<Users />} />
					<Route path='colorPicker' element={<ColorPicker colors={colors} />} />
					{/* Динамічний параметр */}
					<Route path='users/:userId' element={<DetailsUser />} />
				</Route>
				<Route path='*' element={<NotFound />} />

				{/* Redirect */}
				{/* <Route path='*' element={<Navigate to='/' />} /> */}
			</Routes>
		</>
	)
}

export default App
