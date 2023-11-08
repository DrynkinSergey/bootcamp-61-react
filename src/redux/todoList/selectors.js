import { createSelector } from '@reduxjs/toolkit'

// звичайна функція, котра повертає частинку стейта
export const selectTodos = state => state.todoList.todos
export const selectLoading = state => state.todoList.loading
export const selectError = state => state.todoList.error
export const selectCurrentID = state => state.todoList.deletedId
export const selectFilter = state => state.filter.filter

export const selectFilteredDataBase = state => {
	const filter = selectFilter(state)
	const todos = selectTodos(state)
	console.log('Filter is done!')
	switch (filter) {
		case 'all':
			return todos
		case 'active':
			return todos.filter(item => !item.completed)
		case 'completed':
			return todos.filter(item => item.completed)
		default:
			return console.error('filter is not supported!')
	}
}

export const selectFilteredData = createSelector([selectTodos, selectFilter], (todos, filter) => {
	console.log('Filter with createSelector')
	switch (filter) {
		case 'all':
			return todos
		case 'active':
			return todos.filter(item => !item.completed)
		case 'completed':
			return todos.filter(item => item.completed)
		default:
			return console.error('filter is not supported!')
	}
})

export const selectUncompletedTodoBase = state => {
	const todos = selectTodos(state)
	console.log('Count uncompleted')
	return todos.reduce((total, todo) => (todo.completed ? total : total + 1), 0)
}
export const selectUncompleted = createSelector([selectTodos], todos => {
	console.log('Count uncompleted')
	return todos.reduce((total, todo) => (todo.completed ? total : total + 1), 0)
})
