import { createReducer } from '@reduxjs/toolkit'
import { addTodo, deleteTodo, editTodo, toggleTodo } from './actions'
import { ADD_TODO, DELETE_TODO, EDIT_TODO, TOGGLE_TODO } from './constants'

const initialState = {
	todos: [
		{ id: '1', todo: 'Learn REDUX', completed: false },
		{ id: '2', todo: 'Learn REDUX1', completed: false },
		{ id: '3', todo: 'Learn REDUX2', completed: false },
	],
}

export const todoReducer = createReducer(initialState, builder => {
	builder
		.addCase(deleteTodo, (state, { payload }) => {
			// const itemIndex = state.todos.findIndex(item => item.id === payload)
			// state.todos.splice(itemIndex, 1)
			state.todos = state.todos.filter(item => item.id !== payload)
		})
		.addCase(addTodo, (state, { payload }) => {
			state.todos.push(payload)
		})
		.addCase(toggleTodo, (state, { payload }) => {
			const item = state.todos.find(item => item.id === payload)
			item.completed = !item.completed
		})
		.addCase(editTodo, (state, { payload }) => {
			const item = state.todos.find(item => item.id === payload.id)
			item.todo = payload.text
		})
})

// export const todoReducer = (state = initialState, action) => {
// 	switch (action.type) {
// 		case deleteTodo.type: {
// 			return {
// 				...state,
// 				todos: state.todos.filter(item => item.id !== action.payload),
// 			}
// 		}
// 		case addTodo.type: {
// 			return {
// 				...state,
// 				todos: [...state.todos, action.payload],
// 			}
// 		}
// 		case toggleTodo.type: {
// 			return {
// 				...state,
// 				todos: state.todos.map(item => (item.id === action.payload ? { ...item, completed: !item.completed } : item)),
// 			}
// 		}
// 		case editTodo.type: {
// 			return {
// 				...state,
// 				todos: state.todos.map(item => (item.id === action.payload.id ? { ...item, todo: action.payload.text } : item)),
// 			}
// 		}
// 		default:
// 			return state
// 	}
// }
