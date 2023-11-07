import { createSlice, nanoid } from '@reduxjs/toolkit'
import moment from 'moment'

const prepareAdd = todo => {
	return {
		payload: {
			todo,
			id: nanoid(),
			completed: false,
			createdAt: moment().format('DD.MM.YYYY hh:mm:ss'),
		},
	}
}

const initialState = {
	todos: [],
	loading: false,
	error: null,
}
const todoSlice = createSlice({
	name: 'todos',
	initialState,
	reducers: {
		addTodo: {
			prepare: prepareAdd,
			reducer: (state, { payload }) => {
				state.todos.push(payload)
			},
		},
		deleteTodo: (state, { payload }) => {
			state.todos = state.todos.filter(item => item.id !== payload)
		},
		toggleTodo: (state, { payload }) => {
			const item = state.todos.find(item => item.id === payload)
			item.completed = !item.completed
		},
		editTodo: (state, { payload }) => {
			const item = state.todos.find(item => item.id === payload.id)
			item.todo = payload.text
		},
		isLoading: (state, action) => {
			state.loading = true
		},
		isError: (state, action) => {
			state.error = action.payload
			state.loading = false
		},
		isFetchingDone: (state, action) => {
			state.loading = false
			state.todos = action.payload
		},
	},
})

export const { isError, isLoading, isFetchingDone, deleteTodo, addTodo, editTodo, toggleTodo } = todoSlice.actions
export const todoReducer = todoSlice.reducer
