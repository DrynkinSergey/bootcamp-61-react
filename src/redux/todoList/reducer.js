import { ADD_TODO, DELETE_TODO, EDIT_TODO, TOGGLE_TODO } from './constants'

// Cторюємо наш початковий стан
const initialState = {
	todos: [
		{ id: '1', todo: 'Learn REDUX', completed: false },
		{ id: '2', todo: 'Learn REDUX1', completed: false },
		{ id: '3', todo: 'Learn REDUX2', completed: false },
	],
}

// Створюємо функцію редьюсер для зміни стейту. Передаємо обов'язково initialState
export const todoReducer = (state = initialState, action) => {
	// Пробігаємось по тайпу, перевіряємо що прийшло
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
		// По замовченню повертаємо стейт незмінним, якщо жоден з action.type не відпрацював
		default:
			return state
	}
}
