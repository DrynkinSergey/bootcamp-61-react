import { EmployeesFilter } from './EmployeesFilter'
import { EmployeeList } from './EmployeeList'
import userData from './../../assets/users.json'
import { Component } from 'react'

// Create state
// Add delete func

export class Employee extends Component {
	state = {
		users: userData,
	}

	handleDeleteUser = id => {
		console.log(id)
		this.setState(prev => ({ users: prev.users.filter(user => user.id !== id) }))
	}
	render() {
		return (
			<>
				<EmployeesFilter />
				<EmployeeList onDeleteUser={this.handleDeleteUser} users={this.state.users} />
			</>
		)
	}
}
