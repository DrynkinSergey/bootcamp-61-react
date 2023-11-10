import axios from 'axios'
import { toast } from 'react-toastify'
import { createAsyncThunk } from '@reduxjs/toolkit'
import { setCurrentId } from './todoSlice'

// ВСтановити по замовчуванню url
// axios.defaults.baseURL = 'https://goit-task-manager.herokuapp.com/'

axios.defaults.baseURL = 'https://6549f1ede182221f8d52315d.mockapi.io/'
// axios.defaults.baseURL = 'http://localhost:4444'

// CRUD
// C - create
// R - read
// U - update
// D - delete

// Створити asyncThunk. Це метод, котрий приймає 2 аргументи
// 1 - Назва операції (може бути будь-яка)
// 2 - Асінхронний колбек . приймає 2 аргументи  - 1 те, що приходить від компонента (id, text, item , массив, об'єкт, бул тип), 2 - thunkApi - знаходиться всередині rejectWithValue для роботи з помилкою
export const fetchDataThunk = createAsyncThunk('fetchAll', async (_, thunkApi) => {
	try {
		const { data } = await axios.get('todos')
		return data
	} catch (error) {
		return thunkApi.rejectWithValue(error.message)
	}
})
export const deleteTodoThunk = createAsyncThunk('deleteOne', async (id, thunkApi) => {
	try {
		thunkApi.dispatch(setCurrentId)
		const { data } = await axios.delete(`todos/${id}`)
		return data
	} catch (error) {
		return thunkApi.rejectWithValue(error.message)
	}
})
export const toggleTodoThunk = createAsyncThunk('toggleTodo', async (body, thunkApi) => {
	try {
		const { data } = await axios.put(`todos/${body.id}`, { ...body, completed: !body.completed })

		return data
	} catch (error) {
		return thunkApi.rejectWithValue(error.message)
	}
})
export const addTodoThunk = createAsyncThunk('createTodo', async (body, thunkApi) => {
	try {
		const { data } = await axios.post('todos', { todo: body })
		return data
	} catch (error) {
		return thunkApi.rejectWithValue(error.message)
	}
})
export const editTitleThunk = createAsyncThunk('updateTitle', async (body, thunkApi) => {
	try {
		const { data } = await axios.put(`todos/${body.id}`, body)
		return data
	} catch (error) {
		return thunkApi.rejectWithValue(error.message)
	}
})

// export const fetchDataThunk = () => async dispatch => {
// 	try {
// 		dispatch(isLoading())
// 		const { data } = await axios.get('todos')
// 		dispatch(isFetchingDone(data))
// 	} catch (error) {
// 		dispatch(isError(error.message))
// 	}
// }

// export const deleteTodoThunk = id => async dispatch => {
// 	try {
// 		const { data } = await axios.delete(`todos/${id}`)
// 		dispatch(deleteTodo(id))
// 		console.log(`Deleted element `, data)
// 		toast.success('Item was deleted')
// 	} catch (error) {
// 		dispatch(isError(error.message))
// 		toast.error('network error')
// 	}
// }
// export const toggleTodoThunk = item => async dispatch => {
// 	try {
// 		const { data } = await axios.put(`todos/${item.id}`, { ...item, completed: !item.completed })
// 		dispatch(toggleTodo(item.id))
// 	} catch (error) {
// 		dispatch(isError(error.message))
// 	}
// }
// export const addTodoThunk = body => async dispatch => {
// 	try {
// 		const { data } = await axios.post('todos', { todo: body })
// 	} catch (error) {}
// }
