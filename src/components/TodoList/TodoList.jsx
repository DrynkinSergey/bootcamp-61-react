import PropTypes from 'prop-types'

import { StyledButton } from '../Counter/Counter.styled'
import { StyledInput, StyledTodo, StyledTodoList } from './TodoList.styled'
import todoData from './../../assets/todos.json'
import { Flex } from '../../styles/Global'
import { Component, useState } from 'react'
import { Filter } from './Filter'

export const TodoList = () => {
	const [todos, setTodos] = useState(todoData)
	const [newTodoText, setNewTodoText] = useState('')
	const [filterStr, setFilterStr] = useState('')

	const handleDeleteTodo = id => {
		console.log(id)
		setTodos(prev => prev.filter(item => item.id !== id))

		// this.setState(prev => ({ todos: prev.todos.filter(item => item.id !== id) }))
	}
	const handleChangeInput = e => {
		setNewTodoText(e.target.value)

		// this.setState({ newTodoText: e.target.value })
	}
	const handleAddTodo = () => {
		if (newTodoText.trim()) {
			const newTodo = { id: crypto.randomUUID(), completed: false, todo: newTodoText }
			setTodos(prev => [...prev, newTodo])
			setNewTodoText('')
		}

		// console.log(this.state.newTodoText)
		// if (this.state.newTodoText.trim()) {
		// 	const newTodo = { id: crypto.randomUUID(), completed: false, todo: this.state.newTodoText }
		// 	this.setState(prev => ({ todos: [...prev.todos, newTodo], newTodoText: '' }))
		// }
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

		// this.setState(prev => ({
		// todos: prev.todos.map(item => {
		// 	if (item.id === id) {
		// 		return { ...item, completed: !item.completed }
		// 	} else {
		// 		return item
		// 	}
		// }),
		// }))
	}
	const handleChangeFilter = e => {
		console.log(e.target.value)
		// this.setState({ filterStr: e.target.value })
		setFilterStr(e.target.value)
	}
	const getFilteredData = () => {
		// return this.state.todos.filter(item => item.todo.toLowerCase().includes(this.state.filterStr.toLowerCase()))
		return todos.filter(item => item.todo.toLowerCase().includes(filterStr.toLowerCase()))
	}

	const handleReset = () => {
		setTodos([])
		// this.setState({ todos: [] })
	}
	const handleDeleteSelected = () => {
		setTodos(prev => prev.filter(item => !item.completed))

		// this.setState(prev => ({ todos: prev.todos.filter(item => !item.completed) }))
	}
	const filteredData = getFilteredData()

	return (
		<div>
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
// export class TodoList extends Component {
// 	state = {
// 		todos: todoData,
// 		newTodoText: '',
// 		filterStr: '',
// 	}
// 	componentDidMount() {
// 		console.log('Mount')
// 		const todos = JSON.parse(window.localStorage.getItem('todos'))
// 		if (todos.length) {
// 			this.setState({ todos })
// 		}
// 	}
// 	componentDidUpdate(_, prevState) {
// 		const { todos } = this.state
// 		if (prevState.todos !== todos) {
// 			window.localStorage.setItem('todos', JSON.stringify(todos))
// 		}
// 	}

// handleDeleteTodo = id => {
// 	console.log(id)
// 	this.setState(prev => ({ todos: prev.todos.filter(item => item.id !== id) }))
// }
// handleChangeInput = e => {
// 	this.setState({ newTodoText: e.target.value })
// }
// handleAddTodo = () => {
// 	console.log(this.state.newTodoText)
// 	if (this.state.newTodoText.trim()) {
// 		const newTodo = { id: crypto.randomUUID(), completed: false, todo: this.state.newTodoText }
// 		this.setState(prev => ({ todos: [...prev.todos, newTodo], newTodoText: '' }))
// 	}
// }
// handleToggleTodo = id => {
// 	this.setState(prev => ({
// 		todos: prev.todos.map(item => {
// 			if (item.id === id) {
// 				return { ...item, completed: !item.completed }
// 			} else {
// 				return item
// 			}
// 		}),
// 	}))
// }
// handleChangeFilter = e => {
// 	console.log(e.target.value)
// 	this.setState({ filterStr: e.target.value })
// }
// getFilteredData = () => {
// 	return this.state.todos.filter(item => item.todo.toLowerCase().includes(this.state.filterStr.toLowerCase()))
// }

// handleReset = () => {
// 	this.setState({ todos: [] })
// }
// handleDeleteSelected = () => {
// 	this.setState(prev => ({ todos: prev.todos.filter(item => !item.completed) }))
// }

// 	render() {
// 		const { newTodoText, filterStr } = this.state
// 		const filteredData = this.getFilteredData()
// return (
// 	<div>
// 		<StyledTodoList>
// 			<Flex $height='auto'>
// 				<StyledInput value={newTodoText} onChange={this.handleChangeInput} type='text' />
// 				<StyledButton onClick={this.handleAddTodo}>Add</StyledButton>
// 			</Flex>
// 			<Filter filterStr={filterStr} setFilter={this.handleChangeFilter} />
// 			{filteredData.map(item => (
// 				<StyledTodo key={item.id}>
// 					<input type='checkbox' checked={item.completed} onChange={() => this.handleToggleTodo(item.id)} />
// 					<span>{item.todo}</span>
// 					<StyledButton $size='18px' onClick={() => this.handleDeleteTodo(item.id)}>
// 						Delete
// 					</StyledButton>
// 				</StyledTodo>
// 			))}
// 			<button onClick={this.handleReset}>Clear</button>
// 			<button onClick={this.handleDeleteSelected}>Delete only selected</button>
// 		</StyledTodoList>
// 	</div>
// )
// 	}
// }
TodoList.propTypes = {
	message: PropTypes.string,
}
