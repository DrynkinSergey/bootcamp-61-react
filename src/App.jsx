import { Link, Navigate, Route, Routes } from 'react-router-dom'
import colors from './assets/colors.json'
import { Layout } from './components/Layout'
import { Home } from './pages/Home'
// import { About } from './pages/About'
// import Users from './pages/Users'
import NotFound from './pages/NotFound'
import DetailsUser from './pages/DetailsUser'
import { ColorPicker } from './components/ColorPicker/ColorPicker'
import AboutUser from './components/AboutUser'
// import UserPosts from './components/UserPosts'
import Register from './pages/Register'
import { lazy, useContext } from 'react'
import { UserContext } from './context/UserProvider'
import { PrivateRoute } from './routes/PrivateRoute'

const Users = lazy(() => import('./pages/Users'))
const UserPosts = lazy(() => import('./components/UserPosts'))
const About = lazy(() => import('./pages/About'))
const App = () => {
	const { isLoggedIn } = useContext(UserContext)
	return (
		<>
			<Routes>
				<Route path='/' element={<Layout />}>
					<Route index element={<Home />} />
					<Route path='about' element={<About />} />
					<Route path='register' element={<Register />} />
					<Route path='users' element={<Users />} />

					<Route path='colorPicker' element={<ColorPicker colors={colors} />} />
					{/* Динамічний параметр */}

					<Route
						path='users/:userId'
						element={
							// <PrivateRoute>
							<DetailsUser />
							// </PrivateRoute>
						}
					>
						<Route index element={<h2> Клікни на посилання, щоб побачити їх дані</h2>} />
						<Route path='about' element={<AboutUser />} />
						<Route
							path='posts'
							element={
								<PrivateRoute>
									<UserPosts />
								</PrivateRoute>
							}
						/>
					</Route>
				</Route>
				<Route path='*' element={<NotFound />} />
			</Routes>
			)
		</>
	)
}

export default App
