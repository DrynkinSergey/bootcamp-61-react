import { configureStore } from '@reduxjs/toolkit'
import { counterReducer } from './counter/reducer'
import { todoReducer } from './todoList/reducer'

export const store = configureStore({
	reducer: {
		count: counterReducer,
		todoList: todoReducer,
	},
})
