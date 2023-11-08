import { configureStore } from '@reduxjs/toolkit'
import { todoReducer } from './todoList/todoSlice'
import { filterReducer } from './filter/filterSlice'
import logger from 'redux-logger'
import { toast } from 'react-toastify'

const myLogger = store => next => action => {
	// console.log(action)
	if (action.payload?.todo === 'Angular') {
		action.payload.todo = 'React'
		setTimeout(() => {
			toast.error('Angular is detected')
		}, 1000)
		setTimeout(() => {
			toast.info('Angular was replaced to React')
		}, 2500)
		setTimeout(() => {
			toast.success('Have a nice day 🔥')
		}, 3500)
	}
	next(action)
}

export const store = configureStore({
	reducer: {
		todoList: todoReducer,
		filter: filterReducer,
	},
	middleware: getDefaultMiddleware => getDefaultMiddleware().concat(myLogger),
})
