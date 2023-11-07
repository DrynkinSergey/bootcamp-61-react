import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { useForm } from 'react-hook-form'
import { selectError, selectLoading, selectTodos } from '../../redux/todoList/selectors'
import { toast } from 'react-toastify'
import moment from 'moment'
import { addTodo, deleteTodo, editTodo, toggleTodo } from '../../redux/todoList/todoSlice'
import { Filter } from '../filter/Filter'
import { deleteTodoThunk, fetchDataThunk, toggleTodoThunk } from '../../redux/todoList/operations'

export const TodoList = () => {
	const todos = useSelector(selectTodos)
	const filter = useSelector(state => state.filter.filter)
	const loading = useSelector(selectLoading)
	const error = useSelector(selectError)
	const dispatch = useDispatch()
	useEffect(() => {
		dispatch(fetchDataThunk('hello it is my first thunk'))
	}, [dispatch])

	const { register, handleSubmit } = useForm()

	const submit = ({ text }) => {
		dispatch(addTodo(text))
	}

	const handleChangeTodo = id => {
		dispatch(editTodo({ id, text: 'REDUX IS MY LOVE' }))
	}
	const getFilteredData = () => {
		switch (
			filter // all, completed , active
		) {
			case 'all':
				return todos // -> [same array]
			case 'active':
				return todos.filter(item => !item.completed) /// -> [...]
			case 'completed':
				return todos.filter(item => item.completed) /// -> [...]
			default:
				return console.error('filter is not supported!')
		}
	}
	return (
		<div>
			<form onSubmit={handleSubmit(submit)}>
				<input {...register('text')} type='text' />
				<button>Add todo</button>
			</form>
			<Filter />
			{loading && <h1>loading....</h1>}
			<ul>
				{getFilteredData()?.map(todo => (
					<li key={todo.id}>
						<input type='checkbox' checked={todo.completed} onChange={() => dispatch(toggleTodoThunk(todo))} />
						<p onClick={() => handleChangeTodo(todo.id)}>{todo.todo}</p>{' '}
						<button onClick={() => dispatch(deleteTodoThunk(todo.id))}>Delete</button>
					</li>
				))}
			</ul>
		</div>
	)
}
