import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { useForm } from 'react-hook-form'
import { selectCurrentID, selectError, selectLoading, selectTodos } from '../../redux/todoList/selectors'
import { toast } from 'react-toastify'
import moment from 'moment'
import { addTodo, deleteTodo, editTodo, toggleTodo } from '../../redux/todoList/todoSlice'
import { Filter } from '../filter/Filter'
import {
	addTodoThunk,
	deleteTodoThunk,
	editTitleThunk,
	fetchDataThunk,
	toggleTodoThunk,
} from '../../redux/todoList/operations'

export const TodoList = () => {
	const todos = useSelector(selectTodos)
	const filter = useSelector(state => state.filter.filter)
	const loading = useSelector(selectLoading)
	const error = useSelector(selectError)
	const currId = useSelector(selectCurrentID)

	const dispatch = useDispatch()

	useEffect(() => {
		dispatch(fetchDataThunk())
	}, [dispatch])

	const { register, handleSubmit } = useForm()

	const submit = ({ text }) => {
		dispatch(addTodoThunk(text))
	}

	const handleChangeTodo = todo => {
		dispatch(editTitleThunk({ ...todo, todo: prompt('Enter new text') }))
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

			{error && <h1>{error}</h1>}
			<ul>
				{getFilteredData()?.map(todo => (
					<li key={todo.id}>
						<input type='checkbox' checked={todo.completed} onChange={() => dispatch(toggleTodoThunk(todo))} />
						<p onClick={() => handleChangeTodo(todo)}>{todo.todo}</p>
						{loading && currId === todo.id ? (
							<button>deleting...</button>
						) : (
							<button onClick={() => dispatch(deleteTodoThunk(todo.id))}>Delete</button>
						)}
					</li>
				))}
			</ul>
		</div>
	)
}
