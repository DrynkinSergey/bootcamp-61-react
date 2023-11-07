import axios from 'axios'
import { isError, isLoading, isFetchingDone, deleteTodo, toggleTodo } from './todoSlice'
import { toast } from 'react-toastify'

axios.defaults.baseURL = 'https://6549f1ede182221f8d52315d.mockapi.io/'

export const fetchDataThunk = () => async dispatch => {
	try {
		dispatch(isLoading())
		const { data } = await axios.get('todos')
		dispatch(isFetchingDone(data))
	} catch (error) {
		dispatch(isError(error.message))
	}
}

export const deleteTodoThunk = id => async dispatch => {
	try {
		const { data } = await axios.delete(`todos/${id}`)
		dispatch(deleteTodo(id))
		console.log(`Deleted element `, data)
		toast.success('Item was deleted')
	} catch (error) {
		dispatch(isError(error.message))
		toast.error('network error')
	}
}
export const toggleTodoThunk = item => async dispatch => {
	try {
		const { data } = await axios.put(`todos/${item.id}`, { ...item, completed: !item.completed })
		dispatch(toggleTodo(item.id))
	} catch (error) {
		dispatch(isError(error.message))
	}
}
