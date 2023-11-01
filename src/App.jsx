import { Link, Navigate, Route, Routes } from 'react-router-dom'
import colors from './assets/colors.json'
import { Layout } from './components/Layout'
import { Home } from './pages/Home'
import { About } from './pages/About'
import Users from './pages/Users'
import NotFound from './pages/NotFound'
import DetailsUser from './pages/DetailsUser'
import { ColorPicker } from './components/ColorPicker/ColorPicker'
import AboutUser from './components/AboutUser'
import UserPosts from './components/UserPosts'
import Register from './pages/Register'
import { useContext } from 'react'
import { UserContext } from './context/UserProvider'
const App = () => {
	const { isLoggedIn } = useContext(UserContext)
	return (
		<>
			{isLoggedIn ? (
				<Routes>
					<Route path='/' element={<Layout />}>
						<Route index element={<Home />} />
						<Route path='about' element={<About />} />
						<Route path='register' element={<Register />} />
						<Route path='users' element={<Users />} />

						<Route path='colorPicker' element={<ColorPicker colors={colors} />} />
						{/* Динамічний параметр */}

						<Route path='users/:userId' element={isLoggedIn ? <DetailsUser /> : <Navigate to='/register' />}>
							<Route index element={<h2> Клікни на посилання, щоб побачити їх дані</h2>} />
							<Route path='about' element={<AboutUser />} />
							<Route path='posts' element={<UserPosts />} />
						</Route>
					</Route>
					<Route path='*' element={<NotFound />} />
				</Routes>
			) : (
				<Routes>
					<Route path='register' element={<Register />} />
					<Route path='*' element={<Navigate to='/register' />} />
				</Routes>
			)}
		</>
	)
}

export default App
