import { ADD_TODO, DELETE_TODO, EDIT_TODO, TOGGLE_TODO } from './constants'

const initialState = {
	todos: [
		{ id: '1', todo: 'Learn REDUX', completed: false },
		{ id: '2', todo: 'Learn REDUX1', completed: false },
		{ id: '3', todo: 'Learn REDUX2', completed: false },
	],
}

export const todoReducer = (state = initialState, action) => {
	switch (action.type) {
		case DELETE_TODO: {
			return {
				...state,
				todos: state.todos.filter(item => item.id !== action.payload),
			}
		}
		case ADD_TODO: {
			return {
				...state,
				todos: [...state.todos, action.payload],
			}
		}
		case TOGGLE_TODO: {
			return {
				...state,
				todos: state.todos.map(item => (item.id === action.payload ? { ...item, completed: !item.completed } : item)),
			}
		}
		case EDIT_TODO: {
			return {
				...state,
				todos: state.todos.map(item => (item.id === action.payload.id ? { ...item, todo: action.payload.text } : item)),
			}
		}
		default:
			return state
	}
}
