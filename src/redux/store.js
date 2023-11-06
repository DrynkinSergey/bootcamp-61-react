import { configureStore } from '@reduxjs/toolkit'
// import { counterReducer } from './counter/reducer'
import { counterReducer } from './counter/counterSlice'
import { todoReducer } from './todoList/todoSlice'

export const store = configureStore({
	reducer: {
		count: counterReducer,
		todoList: todoReducer,
	},
})
