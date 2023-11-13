import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useForm } from 'react-hook-form'

import { TodoCard } from '../../components'
import Filter from '../../components'

import { selectError, selectFilteredData, selectUncompleted } from '../../redux/todoList/selectors'
import { addTodoThunk, fetchDataThunk } from '../../redux/todoList/operations'
import { useModal } from '../../hooks/useModal'
import Modal from '../../components/Modal/Modal'

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
			<form className='py-2 flex justify-center mb-2 gap-2' onSubmit={handleSubmit(submit)}>
				<input
					{...register('text')}
					type='text'
					placeholder='Type here'
					className='input input-bordered input-primary bg-white w-full max-w-xs'
				/>

				<button className='btn btn-outline btn-primary'>Add todo</button>
			</form>
			<Filter />
			<button className='btn btn-primary block mx-auto my-4' onClick={openModal}>
				Open
			</button>
			{isOpen ? (
				<Modal close={closeModal}>
					<h2>Hello</h2>
				</Modal>
			) : null}
			<h3 className='text-center text-4xl font-bold mb-4 underline'>Uncompleted todos: {uncompletedTodos}</h3>
			{error && <h1>{error}</h1>}
			<ul className='grid grid-cols-3 gap-4  mx-auto max-w-[1000px]'>
				{todos?.map(todo => (
					<TodoCard key={todo.id} {...todo} />
				))}
			</ul>
		</div>
	)
}
