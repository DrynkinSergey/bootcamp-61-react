import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { useForm } from 'react-hook-form'
import { selectTodos } from '../../redux/todoList/selectors'
import { toast } from 'react-toastify'
import moment from 'moment'
import { addTodo, deleteTodo, editTodo, toggleTodo } from '../../redux/todoList/todoSlice'

export const TodoList = () => {
	// Використовуємо useSelector, щоб отримати дані з стору
	useEffect(() => {
		setTimeout(() => {
			toast.info(`${moment().format('DD.MM.YYYY hh:mm:ss')}`)
		}, 3000)
	}, [])
	const todos = useSelector(selectTodos)
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
	return (
		<div>
			<form onSubmit={handleSubmit(submit)}>
				<input {...register('text')} type='text' />
				<button>Add todo</button>
			</form>
			<ul>
				{todos.map(todo => (
					<li key={todo.id}>
						<input type='checkbox' value={todo.completed} onChange={() => dispatch(toggleTodo(todo.id))} />
						<p onClick={() => handleChangeTodo(todo.id)}>{todo.todo}</p>{' '}
						<button onClick={() => dispatch(deleteTodo(todo.id))}>Delete</button>
					</li>
				))}
			</ul>
		</div>
	)
}
