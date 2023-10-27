import { EmployeesFilter } from './EmployeesFilter'
import { EmployeeList } from './EmployeeList'
import userData from './../../assets/users.json'
import { Component, useEffect, useState } from 'react'
import { getFilteredData } from '../../helpers/getFilteredData'
import AddUserForm from './AddUserForm'
import { nanoid } from 'nanoid'
import Modal from '../Modal/Modal'

export const Employee = () => {
	// state = {
	// 	users: userData,
	// 	filter: '',
	// 	isAvailable: false,
	// 	activeSkill: 'all',
	// 	isOpen: false,
	// }

	const [users, setUsers] = useState(userData)
	const [filter, setFilter] = useState('')
	const [isAvailable, setIsAvailable] = useState(false)
	const [activeSkill, setActiveSkill] = useState('all')
	const [isOpen, setIsOpen] = useState(false)

	useEffect(() => {
		console.log('Users already done!')
		const users = JSON.parse(window.localStorage.getItem('users'))
		if (users?.length) {
			setUsers(users)
		}
	}, [])

	useEffect(() => {
		window.localStorage.setItem('users', JSON.stringify(users))
		window.localStorage.setItem('filter', JSON.stringify(filter))
	}, [users, filter])

	// componentDidMount() {
	// 	console.log('Users already done!')
	// 	const users = JSON.parse(window.localStorage.getItem('users'))
	// 	if (users?.length) {
	// 		setState({ users })
	// 	}
	// }
	// componentDidUpdate(_, prevState) {
	// 	if (prevState.users !== state.users) {
	// 		window.localStorage.setItem('users', JSON.stringify(state.users))
	// 	}
	// 	if (prevState.filter !== state.filter) {
	// 		window.localStorage.setItem('filter', JSON.stringify(state.filter))
	// 	}
	// }

	const handleToggleModal = () => {
		// setState(prev => ({ isOpen: !prev.isOpen }))
		setIsOpen(prev => !prev)
	}

	const handleDeleteUser = id => {
		console.log(id)
		setUsers(prev => prev.filter(user => user.id !== id))
		// setState(prev => ({ users: prev.users.filter(user => user.id !== id) }))
	}

	const handleChangeFilter = filter => {
		// setState({ filter })
		setFilter(filter)
	}

	const handleChangeIsAvailable = () => {
		setIsAvailable(prev => !prev)
		// setState(prev => ({ isAvailable: !prev.isAvailable }))
	}
	const handleChangeActiveSkill = activeSkill => {
		console.log(activeSkill)
		setActiveSkill(activeSkill)
		// setState({ activeSkill })
	}
	const handleAddUser = user => {
		setUsers(prev => [...prev, { ...user, id: nanoid() }])
		// setState(prev => ({ users: [...prev.users, { ...user, id: nanoid() }] }))
	}

	const handleEditUser = ({ name, id }) => {
		setUsers(prev => prev.map(user => (user.id === id ? { ...user, name } : user)))
		// setState(prev => ({ users: prev.users.map(user => (user.id === id ? { ...user, name } : user)) }))
	}

	const filteredData = getFilteredData({ users, filter, isAvailable, activeSkill })
	return (
		<>
			<EmployeesFilter
				isAvailable={isAvailable}
				filter={filter}
				activeSkill={activeSkill}
				onChangeSkill={handleChangeActiveSkill}
				onChangeAvailable={handleChangeIsAvailable}
				onChangeFilter={handleChangeFilter}
			/>
			<AddUserForm handleAddUser={handleAddUser} />
			<button onClick={handleToggleModal}>Show Modal</button>
			{isOpen ? (
				<Modal close={handleToggleModal}>
					<h1>Продам холодильник</h1>
				</Modal>
			) : null}
			<EmployeeList handleEditUser={handleEditUser} onDeleteUser={handleDeleteUser} users={filteredData} />
		</>
	)
}
