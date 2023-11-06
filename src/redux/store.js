import { configureStore } from '@reduxjs/toolkit'
import { todoReducer } from './todoList/todoSlice'
import { filterReducer } from './filter/filterSlice'

export const store = configureStore({
	reducer: {
		todoList: todoReducer,
		filter: filterReducer,
	},
})
