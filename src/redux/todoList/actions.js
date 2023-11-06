import moment from 'moment/moment'
import { ADD_TODO, DELETE_TODO, EDIT_TODO, TOGGLE_TODO } from './constants'
import { createAction, nanoid } from '@reduxjs/toolkit'

// export const deleteTodo = id => ({ type: DELETE_TODO, payload: id })

// export const addTodo = todo => {
// 	const newTodo = {
// 		todo,
// 		id: nanoid(),
// 		completed: false,
// 	}
// 	return {
// 		type: ADD_TODO,
// 		payload: newTodo,
// 	}
// }
// export const toggleTodo = id => ({ type: TOGGLE_TODO, payload: id })
// export const editTodo = ({ id, text }) => ({ type: EDIT_TODO, payload: { id, text } })

// dispatch(addTodo('Text'))=> {todo:'Text', id: '43dfsafjk213ka', completed:false, createdAt: '12:13:14'}
export const addTodo = createAction('addTodo', todo => {
	return {
		payload: {
			todo,
			id: nanoid(),
			completed: false,
			createdAt: moment().format('DD.MM.YYYY hh:mm:ss'),
		},
	}
})
export const deleteTodo = createAction('deleteTodo') // dispatch(deleteTodo(id))
export const toggleTodo = createAction('toggleTodo')
export const editTodo = createAction('editTodo')
