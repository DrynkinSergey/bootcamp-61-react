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
			<input type='checkbox' checked={completed} onChange={() => dispatch(toggleTodoThunk(item))} />
			<p onClick={() => handleChangeTodo(todo)}>{todo}</p>
			{loading && currId === id ? (
				<button>deleting...</button>
			) : (
				<button onClick={() => dispatch(deleteTodoThunk(id))}>Delete</button>
			)}
		</li>
	)
}
