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

					{/* users/12/about */}
					{/* users/12/info */}
					{/* users/12/posts */}
					<Route path='users/:userId' element={<DetailsUser />}>
						<Route index element={<h2> Клікни на посилання, щоб побачити їх дані</h2>} />
						<Route path='about' element={<AboutUser />} />
						<Route path='posts' element={<UserPosts />} />
					</Route>
				</Route>
				<Route path='*' element={<NotFound />} />

				{/* Redirect */}
				{/* <Route path='*' element={<Navigate to='/' />} /> */}
			</Routes>
		</>
	)
}

export default App
