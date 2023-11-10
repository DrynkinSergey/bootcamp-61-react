import React from 'react'

import { Route, Routes } from 'react-router-dom'
import { TodoList } from './pages/TodoList/TodoList'
import { Tailwind } from './pages/Tailwind/Tailwind'
import { Login } from './pages/Login'
import { Register } from './pages/Register'
import { NotFound } from './pages/NotFound'
import { Layout } from './components/Layout'

const App = () => {
	return (
		<div className='bg-white min-h-screen text-black'>
			<Routes>
				<Route path='/' element={<Layout />}>
					<Route index element={<TodoList />} />
					<Route path='/tailwind' element={<Tailwind />} />
				</Route>
				<Route path='/login' element={<Login />} />
				<Route path='/register' element={<Register />} />
				<Route path='*' element={<NotFound />} />
			</Routes>
		</div>
	)
}

export default App
