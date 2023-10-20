import PropTypes from 'prop-types'

import { StyledButton } from '../Counter/Counter.styled'
import { StyledInput, StyledTodo, StyledTodoList } from './TodoList.styled'
import todoData from './../../assets/todos.json'
import { Flex } from '../../styles/Global'
import { Component } from 'react'
import { Filter } from './Filter'

export class TodoList extends Component {
	state = {
		todos: todoData,
		newTodoText: '',
		filterStr: '',
	}

	handleDeleteTodo = id => {
		console.log(id)
		this.setState(prev => ({ todos: prev.todos.filter(item => item.id !== id) }))
	}
	handleChangeInput = e => {
		this.setState({ newTodoText: e.target.value })
	}
	handleAddTodo = () => {
		console.log(this.state.newTodoText)
		if (this.state.newTodoText.trim()) {
			const newTodo = { id: crypto.randomUUID(), completed: false, todo: this.state.newTodoText }
			this.setState(prev => ({ todos: [...prev.todos, newTodo], newTodoText: '' }))
		}
	}
	handleToggleTodo = id => {
		console.log('RERENDER')
		// this.setState(prev => ({
		// 	todos: prev.todos.map(item => (item.id === id ? { ...item, completed: !item.completed } : item)),
		// }))
		this.setState(prev => ({
			todos: prev.todos.map(item => {
				if (item.id === id) {
					return { ...item, completed: !item.completed }
				} else {
					return item
				}
			}),
		}))
	}
	handleChangeFilter = e => {
		console.log(e.target.value)
		this.setState({ filterStr: e.target.value })
	}
	getFilteredData = () => {
		return this.state.todos.filter(item => item.todo.toLowerCase().includes(this.state.filterStr.toLowerCase()))
	}

	handleReset = () => {
		this.setState({ todos: [] })
	}
	handleDeleteSelected = () => {
		this.setState(prev => ({ todos: prev.todos.filter(item => !item.completed) }))
	}

	render() {
		const { todos, newTodoText, filterStr } = this.state
		const filteredData = this.getFilteredData()
		return (
			<div>
				<StyledTodoList>
					<Flex $height='auto'>
						<StyledInput value={newTodoText} onChange={this.handleChangeInput} type='text' />
						<StyledButton onClick={this.handleAddTodo}>Add</StyledButton>
					</Flex>
					<Filter filterStr={filterStr} setFilter={this.handleChangeFilter} />
					{filteredData.map(item => (
						<StyledTodo key={item.id}>
							<input type='checkbox' checked={item.completed} onChange={() => this.handleToggleTodo(item.id)} />
							<span>{item.todo}</span>
							<StyledButton $size='18px' onClick={() => this.handleDeleteTodo(item.id)}>
								Delete
							</StyledButton>
						</StyledTodo>
					))}
					<button onClick={this.handleReset}>Clear</button>
					<button onClick={this.handleDeleteSelected}>Delete only selected</button>
				</StyledTodoList>
			</div>
		)
	}
}
TodoList.propTypes = {
	message: PropTypes.string,
}
