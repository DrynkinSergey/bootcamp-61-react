import React, { useEffect } from 'react'
import { Route, Routes } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

import { TodoList } from './pages/TodoList/TodoList'
import { Tailwind } from './pages/Tailwind/Tailwind'
import { Login } from './pages/Login'
import { Register } from './pages/Register'
import { NotFound } from './pages/NotFound'
import { Layout } from './components/Layout'
import { TodoListRTK_QUERY } from './pages/TodoListRTK_QUERY/TodoListRTK_QUERY'

import { PrivateRoute } from './hoc/PrivateRoute'
import { refreshThunk } from './redux/auth/operations'
import { selectIsRefresh } from './redux/auth/selectors'
import Loader from './components/Loader'
import { PublicRoute } from './hoc/PublicRoute'

const App = () => {
	const dispatch = useDispatch()
	const refresh = useSelector(selectIsRefresh)
	useEffect(() => {
		dispatch(refreshThunk())
	}, [dispatch])
	return refresh ? (
		<Loader />
	) : (
		<div className='bg-white min-h-screen text-black'>
			<Routes>
				<Route path='/' element={<Layout />}>
					<Route index element={<h1>Greetings, Friend!</h1>} />
					<Route
						path='/todos'
						element={
							<PrivateRoute>
								<TodoList />
							</PrivateRoute>
						}
					/>
					<Route path='/todoRTK_Query' element={<TodoListRTK_QUERY />} />
					<Route
						path='/login'
						element={
							<PublicRoute>
								<Login />
							</PublicRoute>
						}
					/>
					<Route
						path='/register'
						element={
							<PublicRoute>
								<Register />
							</PublicRoute>
						}
					/>
					<Route
						path='/tailwind'
						element={
							<PublicRoute>
								<Tailwind />
							</PublicRoute>
						}
					/>
				</Route>

				<Route path='*' element={<NotFound />} />
			</Routes>
		</div>
	)
}

export default App
