import React from 'react'
import Posts from './components/Posts/Posts'
import { ColorPicker } from './components/ColorPicker/ColorPicker'
import colors from './assets/colors.json'
import { Counter } from './components/Counter/Counter'
import { Employee } from './components/Employees/Employee'
import { TodoList } from './components/TodoList/TodoList'
class App extends React.Component {
	render() {
		return (
			<div>
				<Counter />
				{/* <ColorPicker colors={colors} /> */}
				{/* <Posts /> */}
				{/* <Employee /> */}
				{/* <TodoList /> */}
			</div>
		)
	}
}

export default App
