import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { deleteTodoThunk, editTitleThunk, toggleTodoThunk } from '../../redux/todoList/operations'
import { selectCurrentID, selectLoading } from '../../redux/todoList/selectors'
import { selectIsLoggedIn } from '../../redux/auth/selectors'

export const TodoCard = ({ completed, text, id }) => {
	const item = { completed, text, id }
	const isLoggedIn = useSelector(selectIsLoggedIn)

	const dispatch = useDispatch()
	const loading = useSelector(selectLoading)
	const currId = useSelector(selectCurrentID)

	const handleChangeTodo = item => {
		dispatch(editTitleThunk({ ...item, text: prompt('Enter new text') }))
	}
	return (
		<li>
			<div className='card w-full bg-base-100 shadow-xl'>
				<div className='card-body'>
					<p
						className={`${completed ? 'line-through ' : ' '}text-2xl mb-4 font-bold `}
						onClick={() => handleChangeTodo(text)}
					>
						{text}
					</p>

					<div className='card-actions flex items-center justify-between '>
						<input
							type='checkbox'
							className='checkbox checkbox-primary'
							checked={completed}
							onChange={() => dispatch(toggleTodoThunk(item))}
						/>

						{isLoggedIn && (
							<button className='btn btn-primary py-[1px] px-2' onClick={() => dispatch(deleteTodoThunk(id))}>
								Delete
							</button>
						)}
					</div>
				</div>
			</div>
		</li>
	)
}
