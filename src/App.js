import React from 'react'
import { Counter } from './components/Counter/Counter'
import { ColorPicker } from './components/ColorPicker/ColorPicker'
import colors from './assets/colors.json'
import { TodoList } from './components/TodoList/TodoList'
const App = () => {
	return (
		<div>
			{/* <Counter /> */}
			<ColorPicker colors={colors} />
			{/* <TodoList /> */}
		</div>
	)
}

export default App
