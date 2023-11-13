import React, { useEffect } from 'react'

import { Route, Routes } from 'react-router-dom'
import { TodoList } from './pages/TodoList/TodoList'
import { Tailwind } from './pages/Tailwind/Tailwind'
import { Login } from './pages/Login'
import { Register } from './pages/Register'
import { NotFound } from './pages/NotFound'
import { Layout } from './components/Layout'
import { useDispatch } from 'react-redux'
import { refreshThunk } from './redux/auth/operations'
import { PrivateRoute } from './hoc/PrivateRoute'
import { TodoListRTK_QUERY } from './pages/TodoListRTK_QUERY/TodoListRTK_QUERY'

const App = () => {
	const dispatch = useDispatch()
	useEffect(() => {
		dispatch(refreshThunk())
	}, [dispatch])
	return (
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
					<Route path='/login' element={<Login />} />
					<Route path='/register' element={<Register />} />
					<Route path='/tailwind' element={<Tailwind />} />
				</Route>

				<Route path='*' element={<NotFound />} />
			</Routes>
		</div>
	)
}

export default App
