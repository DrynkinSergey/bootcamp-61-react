import { EmployeesFilter } from './EmployeesFilter'
import { EmployeeList } from './EmployeeList'
import userData from './../../assets/users.json'
import { Component } from 'react'
import { getFilteredData } from '../../helpers/getFilteredData'
import AddUserForm from './AddUserForm'
import { nanoid } from 'nanoid'

// Create state
// Add delete func

export class Employee extends Component {
	state = {
		users: userData,
		filter: '',
		isAvailable: false,
		activeSkill: 'all',
	}
	componentDidMount() {
		console.log('Users already done!')
		const users = JSON.parse(window.localStorage.getItem('users'))
		if (users?.length) {
			this.setState({ users })
		}
	}
	componentDidUpdate(_, prevState) {
		if (prevState.users !== this.state.users) {
			window.localStorage.setItem('users', JSON.stringify(this.state.users))
		}
		if (prevState.filter !== this.state.filter) {
			window.localStorage.setItem('filter', JSON.stringify(this.state.filter))
		}
	}

	handleDeleteUser = id => {
		console.log(id)
		this.setState(prev => ({ users: prev.users.filter(user => user.id !== id) }))
	}

	handleChangeFilter = filter => {
		// async operation
		this.setState({ filter })
		// sync operation
		// window.localStorage.setItem('filter', JSON.stringify(this.state.filter))
	}

	handleChangeIsAvailable = () => {
		this.setState(prev => ({ isAvailable: !prev.isAvailable }))
	}
	handleChangeActiveSkill = activeSkill => {
		console.log(activeSkill)
		this.setState({ activeSkill })
	}
	handleAddUser = user => {
		this.setState(prev => ({ users: [...prev.users, { ...user, id: nanoid() }] }))
	}

	handleEditUser = ({ name, id }) => {
		this.setState(prev => ({ users: prev.users.map(user => (user.id === id ? { ...user, name } : user)) }))
	}

	render() {
		const { filter, users, isAvailable, activeSkill } = this.state
		const filteredData = getFilteredData({ users, filter, isAvailable, activeSkill })
		return (
			<>
				<EmployeesFilter
					isAvailable={isAvailable}
					filter={filter}
					activeSkill={activeSkill}
					onChangeSkill={this.handleChangeActiveSkill}
					onChangeAvailable={this.handleChangeIsAvailable}
					onChangeFilter={this.handleChangeFilter}
				/>
				<AddUserForm handleAddUser={this.handleAddUser} />
				<EmployeeList handleEditUser={this.handleEditUser} onDeleteUser={this.handleDeleteUser} users={filteredData} />
			</>
		)
	}
}
