import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useForm } from 'react-hook-form'

import { TodoCard } from '../../components'
import Filter from '../../components'
import Modal from '../Modal/Modal'

import { selectError, selectFilteredData, selectUncompleted } from '../../redux/todoList/selectors'
import { addTodoThunk, fetchDataThunk } from '../../redux/todoList/operations'
import { useModal } from '../../hooks/useModal'

export const TodoList = () => {
	const todos = useSelector(selectFilteredData)
	const uncompletedTodos = useSelector(selectUncompleted)
	const error = useSelector(selectError)

	const { isOpen, openModal, closeModal } = useModal()
	const dispatch = useDispatch()
	const { register, handleSubmit } = useForm()

	useEffect(() => {
		dispatch(fetchDataThunk())
	}, [dispatch])

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
			<button onClick={openModal}>Open</button>
			{isOpen ? (
				<Modal close={closeModal}>
					<h2>Hello</h2>
				</Modal>
			) : null}
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
