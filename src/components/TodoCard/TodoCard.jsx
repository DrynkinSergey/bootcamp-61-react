import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { deleteTodoThunk, editTitleThunk, toggleTodoThunk } from '../../redux/todoList/operations'
import { selectCurrentID, selectLoading } from '../../redux/todoList/selectors'
import { selectIsLoggedIn } from '../../redux/auth/selectors'
import { useDeleteTodoMutation, useToggleTodoMutation, useUpdateNameMutation } from '../../redux/RTK Query/todoApi'

export const TodoCard = ({ completed, todo: text, id }) => {
	const item = { completed, text, id }
	const isLoggedIn = useSelector(selectIsLoggedIn)
	// Використовуємо хуки, але повертається массив, в котрому перше значення - це наша функція для мутації
	const [deleteTodo] = useDeleteTodoMutation()
	const [toggleTodo] = useToggleTodoMutation()
	const [updateName] = useUpdateNameMutation()
	const dispatch = useDispatch()
	const loading = useSelector(selectLoading)
	const currId = useSelector(selectCurrentID)

	const handleChangeTodo = () => {
		// dispatch(editTitleThunk({ ...item, text: prompt('Enter new text') }))
		updateName({ ...item, text: prompt('Enter new text') })
	}
	return (
		<li>
			<div className='card w-full bg-base-100 shadow-xl'>
				<div className='card-body'>
					<p className={`${completed ? 'line-through ' : ' '}text-2xl mb-4 font-bold `} onClick={handleChangeTodo}>
						{text}
					</p>

					<div className='card-actions flex items-center justify-between '>
						<input
							type='checkbox'
							className='checkbox checkbox-primary'
							checked={completed}
							// onChange={() => dispatch(toggleTodoThunk(item))}
							onChange={() => toggleTodo(item)}
						/>

						{isLoggedIn && (
							<button className='btn btn-primary py-[1px] px-2' onClick={() => deleteTodo(id)}>
								Delete
							</button>
						)}
					</div>
				</div>
			</div>
		</li>
	)
}
