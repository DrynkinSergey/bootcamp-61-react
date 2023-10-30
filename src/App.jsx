import React, { useContext } from 'react'
import { Posts } from './components/Posts/Posts'
import { ColorPicker } from './components/ColorPicker/ColorPicker'
import colors from './assets/colors.json'
import { Counter } from './components/Counter/Counter'
import { Employee } from './components/Employees/Employee'
import { TodoList } from './components/TodoList/TodoList'
import { MyContext } from './context/ContextProvider'
import { LoginForm } from './components/LoginForm/LoginForm'
const App = () => {
	const { isLoggedIn, logout } = useContext(MyContext)
	// Якщо не залогована
	if (!isLoggedIn) {
		return <LoginForm />
	}
	return (
		<div>
			<button onClick={logout}>Exit</button>
			{/* <Counter /> */}
			{/* <ColorPicker colors={colors} /> */}
			<Posts />
			{/* <Employee auto={this.props.auto} /> */}
			{/* <TodoList /> */}
		</div>
	)
}

export default App
