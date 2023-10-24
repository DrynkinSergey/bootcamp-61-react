import React from 'react'
import { Employee } from './components/Employees/Employee'
import { RegisterForm } from './components/RegisterForm/RegisterForm'
import { Counter } from './components/Counter/Counter'
import { TodoList } from './components/TodoList/TodoList'
import { ColorPicker } from './components/ColorPicker/ColorPicker'
import colorsData from './assets/colors.json'
const App = () => {
	return (
		<div>
			<Employee />
			{/* <RegisterForm /> */}
			{/* <Counter /> */}
			{/* <TodoList /> */}
			<ColorPicker colors={colorsData} />
		</div>
	)
}

export default App
