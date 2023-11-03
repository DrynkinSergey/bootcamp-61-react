import { nanoid } from 'nanoid'
import { ADD_TODO, DELETE_TODO, EDIT_TODO, TOGGLE_TODO } from './constants'
// Створюємо actionCreator для того, щоб об'єкт не писати в компоенті. Ця функція повертає об'єкт. Який містить type та payload. Пейлоад може бути не обов'язковим
export const deleteTodo = id => ({ type: DELETE_TODO, payload: id })

// Ми можемо змінювати наш пейлоад, так як нам потрібно
// Додавати сайд еффекти. Random, log
export const addTodo = todo => {
	const newTodo = {
		todo,
		id: nanoid(),
		completed: false,
	}
	return {
		type: ADD_TODO,
		payload: newTodo,
	}
}
export const toggleTodo = id => ({ type: TOGGLE_TODO, payload: id })
export const editTodo = ({ id, text }) => ({ type: EDIT_TODO, payload: { id, text } })
