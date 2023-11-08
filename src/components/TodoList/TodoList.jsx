import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { useForm } from 'react-hook-form'
import { selectError, selectFilteredData, selectUncompleted } from '../../redux/todoList/selectors'
import { Filter } from '../filter/Filter'
import { addTodoThunk, fetchDataThunk } from '../../redux/todoList/operations'
import { TodoCard } from '../TodoCard/TodoCard'

export const TodoList = () => {
	const todos = useSelector(selectFilteredData)

	const uncompletedTodos = useSelector(selectUncompleted)
	const error = useSelector(selectError)

	const dispatch = useDispatch()

	useEffect(() => {
		dispatch(fetchDataThunk())
	}, [dispatch])

	const { register, handleSubmit } = useForm()

	const submit = ({ text }) => {
		dispatch(addTodoThunk(text))
	}

	return (
		<div>
			<form onSubmit={handleSubmit(submit)}>
				<input {...register('text')} type='text' />
				<button>Add todo</button>
			</form>
			<Filter />

			<h3>Uncompleted todos: {uncompletedTodos}</h3>
			{error && <h1>{error}</h1>}
			<ul>
				{todos?.map(todo => (
					<TodoCard key={todo.id} {...todo} />
				))}
			</ul>
		</div>
	)
}
