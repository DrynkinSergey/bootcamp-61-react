import React from 'react'

import { TodoList } from './components/TodoList/TodoList'
import { Tailwind } from './components/Tailwind/Tailwind'

const App = () => {
	return (
		<div className='bg-white'>
			{/* <Tailwind /> */}
			<TodoList />
		</div>
	)
}

export default App
