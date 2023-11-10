import { configureStore } from '@reduxjs/toolkit'
import { todoReducer } from './todoList/todoSlice'
import { filterReducer } from './filter/filterSlice'
import { authReducer } from './auth/slice'

import { persistStore, persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

const persistConfig = {
	key: 'auth',
	version: 1,
	storage,
	whitelist: ['token'],
}

const persistedReducer = persistReducer(persistConfig, authReducer)

export const store = configureStore({
	reducer: {
		todoList: todoReducer,
		filter: filterReducer,
		auth: persistedReducer,
	},
	middleware: getDefaultMiddleware =>
		getDefaultMiddleware({
			serializableCheck: {
				ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
			},
		}),
})
export const persistor = persistStore(store)
