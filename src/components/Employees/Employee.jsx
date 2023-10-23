import { EmployeesFilter } from './EmployeesFilter'
import { EmployeeList } from './EmployeeList'
import userData from './../../assets/users.json'
import { Component } from 'react'
import { getFilteredData } from '../../helpers/getFilteredData'

// Create state
// Add delete func

export class Employee extends Component {
	state = {
		users: userData,
		filter: '',
	}

	handleDeleteUser = id => {
		console.log(id)
		this.setState(prev => ({ users: prev.users.filter(user => user.id !== id) }))
	}

	handleChangeFilter = filter => {
		this.setState({ filter })
	}

	render() {
		const { filter, users } = this.state
		const filteredData = getFilteredData({ users, filter })
		return (
			<>
				<EmployeesFilter filter={filter} onChangeFilter={this.handleChangeFilter} />
				<EmployeeList onDeleteUser={this.handleDeleteUser} users={filteredData} />
			</>
		)
	}
}
