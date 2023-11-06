import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { useForm } from 'react-hook-form'
import { selectTodos } from '../../redux/todoList/selectors'
import { toast } from 'react-toastify'
import moment from 'moment'
import { addTodo, deleteTodo, editTodo, toggleTodo } from '../../redux/todoList/todoSlice'
import { Filter } from '../filter/Filter'

export const TodoList = () => {
	// Використовуємо useSelector, щоб отримати дані з стору

	const todos = useSelector(selectTodos)
	const filter = useSelector(state => state.filter.filter)
	// Діспатч для того, щоб відправити дані до редьюсера (змінити стор)
	const dispatch = useDispatch()

	const { register, handleSubmit } = useForm()

	const submit = ({ text }) => {
		dispatch(addTodo(text))
	}

	const handleChangeTodo = id => {
		// Виклик діспатча з actionCreator , всередину функції пишема майбутній payload
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
			<ul>
				{getFilteredData()?.map(todo => (
					<li key={todo.id}>
						<input type='checkbox' checked={todo.completed} onChange={() => dispatch(toggleTodo(todo.id))} />
						<p onClick={() => handleChangeTodo(todo.id)}>{todo.todo}</p>{' '}
						<button onClick={() => dispatch(deleteTodo(todo.id))}>Delete</button>
					</li>
				))}
			</ul>
		</div>
	)
}
