import { createSlice, isAnyOf, nanoid } from '@reduxjs/toolkit'
import moment from 'moment'
import { addTodoThunk, deleteTodoThunk, fetchDataThunk, toggleTodoThunk } from './operations'

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
		editTodo: (state, { payload }) => {
			const item = state.todos.find(item => item.id === payload.id)
			item.todo = payload.text
		},
	},
	extraReducers: builder => {
		builder
			.addCase(fetchDataThunk.fulfilled, (state, { payload }) => {
				state.todos = payload
				state.loading = false
			})
			.addCase(deleteTodoThunk.fulfilled, (state, { payload }) => {
				state.todos = state.todos.filter(item => item.id !== payload.id)
				state.loading = false
			})
			.addCase(toggleTodoThunk.fulfilled, (state, { payload }) => {
				const item = state.todos.find(item => item.id === payload.id)
				state.loading = false
				item.completed = !item.completed
			})
			.addCase(addTodoThunk.fulfilled, (state, { payload }) => {
				state.loading = false
				state.todos.push(payload)
			})

			.addMatcher(
				isAnyOf(fetchDataThunk.pending, deleteTodoThunk.pending, addTodoThunk.pending, toggleTodoThunk.pending),
				(state, { payload }) => {
					state.loading = true
					state.error = null
				}
			)
			.addMatcher(
				isAnyOf(deleteTodoThunk.rejected, addTodoThunk.rejected, toggleTodoThunk.rejected, fetchDataThunk.rejected),
				(state, { payload }) => {
					state.loading = false
					state.error = payload
				}
			)
	},
})

export const { editTodo } = todoSlice.actions
export const todoReducer = todoSlice.reducer
