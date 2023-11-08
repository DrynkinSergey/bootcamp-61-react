import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { deleteTodoThunk, editTitleThunk, toggleTodoThunk } from '../../redux/todoList/operations'
import { selectCurrentID, selectLoading } from '../../redux/todoList/selectors'

export const TodoCard = ({ completed, todo, id }) => {
	const item = { completed, todo, id }

	const dispatch = useDispatch()
	const loading = useSelector(selectLoading)
	const currId = useSelector(selectCurrentID)

	const handleChangeTodo = item => {
		dispatch(editTitleThunk({ ...item, todo: prompt('Enter new text') }))
	}
	return (
		<li>
			<div className='card w-full bg-base-100 shadow-xl'>
				<div className='card-body'>
					<p
						className={`${completed ? 'line-through ' : ' '}text-2xl mb-4 font-bold `}
						onClick={() => handleChangeTodo(todo)}
					>
						{todo}
					</p>

					<div className='card-actions flex items-center justify-between '>
						<input
							type='checkbox'
							className='checkbox checkbox-primary'
							checked={completed}
							onChange={() => dispatch(toggleTodoThunk(item))}
						/>

						{loading && currId === id ? (
							<button className='btn btn-primary'>
								<span className='loading loading-spinner'></span>
								loading
							</button>
						) : (
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
