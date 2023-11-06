import { configureStore } from '@reduxjs/toolkit'
// import { counterReducer } from './counter/reducer'
import { counterReducer } from './counter/counterSlice'
import { todoReducer } from './todoList/todoSlice'
import { persistStore, persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import { filterReducer } from './filter/filterSlice'

const persistConfig = {
	key: 'root',
	version: 1,
	storage,
	// whitelist:['filter']
}
const persistConfigFilter = {
	key: 'filter',
	version: 1,
	storage,
	// whitelist:['filter']
}

const persistedReducer = persistReducer(persistConfig, todoReducer)
const persistedReducerFilter = persistReducer(persistConfigFilter, filterReducer)

export const store = configureStore({
	reducer: {
		count: counterReducer,
		todoList: persistedReducer,
		filter: persistedReducerFilter,
	},
	middleware: getDefaultMiddleware =>
		getDefaultMiddleware({
			serializableCheck: {
				ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
			},
		}),
})

export const persistor = persistStore(store)
