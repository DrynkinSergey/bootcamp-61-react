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
	todos: [
		{ id: '1', todo: 'Learn REDUX', completed: false },
		{ id: '2', todo: 'Learn REDUX1', completed: false },
		{ id: '3', todo: 'Learn REDUX2', completed: false },
	],
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
	},
})

export const { deleteTodo, addTodo, editTodo, toggleTodo } = todoSlice.actions
export const todoReducer = todoSlice.reducer
