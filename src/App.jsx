import React from 'react'
import { Employee } from './components/Employees/Employee'
import { RegisterForm } from './components/RegisterForm/RegisterForm'
import { Counter } from './components/Counter/Counter'
import { TodoList } from './components/TodoList/TodoList'
import { ColorPicker } from './components/ColorPicker/ColorPicker'
import colorsData from './assets/colors.json'
import { FirstScreen } from './components/FirstScreen/FirstScreen'
class App extends React.Component {
	state = {
		isOpenFirstScreen: true,
	}
	componentDidMount() {
		setTimeout(() => {
			this.setState({ isOpenFirstScreen: false })
		}, 4000)
	}
	render() {
		return (
			<div>
				<Employee />
				{/* <RegisterForm /> */}
				<Counter />
				{/* <TodoList /> */}
				<ColorPicker colors={colorsData} />
				{this.state.isOpenFirstScreen ? <FirstScreen /> : null}
			</div>
		)
	}
}

export default App
