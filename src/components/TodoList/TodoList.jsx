import PropTypes from 'prop-types'

import { StyledButton } from '../Counter/Counter.styled'
import { StyledInput, StyledTodo, StyledTodoList } from './TodoList.styled'
import { Flex } from '../../styles/Global'
import { useContext, useEffect, useState } from 'react'
import { Filter } from './Filter'
import { MyContext } from '../../context/ContextProvider'

export const TodoList = () => {
	const [todos, setTodos] = useState([])
	const [newTodoText, setNewTodoText] = useState('')
	const [filterStr, setFilterStr] = useState('')
	const { user, login } = useContext(MyContext)
	console.log(user)
	useEffect(() => {
		const todos = JSON.parse(window.localStorage.getItem('todos'))
		if (todos?.length) {
			setTodos(todos)
		}
	}, [])

	useEffect(() => {
		window.localStorage.setItem('todos', JSON.stringify(todos))
	}, [todos])

	const handleDeleteTodo = id => {
		console.log(id)
		setTodos(prev => prev.filter(item => item.id !== id))
	}
	const handleChangeInput = e => {
		setNewTodoText(e.target.value)
	}
	const handleAddTodo = () => {
		if (newTodoText.trim()) {
			const newTodo = { id: crypto.randomUUID(), completed: false, todo: newTodoText }
			setTodos(prev => [...prev, newTodo])
			setNewTodoText('')
		}
	}
	const handleToggleTodo = id => {
		setTodos(prev =>
			prev.map(item => {
				if (item.id === id) {
					return { ...item, completed: !item.completed }
				} else {
					return item
				}
			})
		)
	}
	const handleChangeFilter = e => {
		console.log(e.target.value)
		setFilterStr(e.target.value)
	}
	const getFilteredData = () => {
		return todos.filter(item => item.todo.toLowerCase().includes(filterStr.toLowerCase()))
	}

	const handleReset = () => {
		setTodos([])
	}
	const handleDeleteSelected = () => {
		setTodos(prev => prev.filter(item => !item.completed))
	}
	const filteredData = getFilteredData()

	return (
		<div>
			<h2>Hello {user}</h2>
			<button onClick={() => login('Oleh')}>Login</button>
			<StyledTodoList>
				<Flex $height='auto'>
					<StyledInput value={newTodoText} onChange={handleChangeInput} type='text' />
					<StyledButton onClick={handleAddTodo}>Add</StyledButton>
				</Flex>
				<Filter filterStr={filterStr} setFilter={handleChangeFilter} />
				{filteredData?.map(item => (
					<StyledTodo key={item.id}>
						<input type='checkbox' checked={item.completed} onChange={() => handleToggleTodo(item.id)} />
						<span>{item.todo}</span>
						<StyledButton $size='18px' onClick={() => handleDeleteTodo(item.id)}>
							Delete
						</StyledButton>
					</StyledTodo>
				))}
				<button onClick={handleReset}>Clear</button>
				<button onClick={handleDeleteSelected}>Delete only selected</button>
			</StyledTodoList>
		</div>
	)
}
TodoList.propTypes = {
	message: PropTypes.string,
}
