import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addTodo, deleteTodo, editTodo, toggleTodo } from '../../redux/todoList/actions'
import { useForm } from 'react-hook-form'
import { selectTodos } from '../../redux/todoList/selectors'

export const TodoList = () => {
	const todos = useSelector(selectTodos)
	const dispatch = useDispatch()

	const { register, handleSubmit } = useForm()

	const submit = ({ text }) => {
		dispatch(addTodo(text))
	}

	const handleChangeTodo = id => {
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
