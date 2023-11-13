import { configureStore } from '@reduxjs/toolkit'
import { todoReducer } from './todoList/todoSlice'
import { filterReducer } from './filter/filterSlice'
import { authReducer } from './auth/slice'

import { persistStore, persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import { todoApi } from './RTK Query/todoApi'
import { setupListeners } from '@reduxjs/toolkit/query'

const persistConfig = {
	key: 'auth',
	version: 1,
	storage,
	whitelist: ['token'],
}

const persistedReducer = persistReducer(persistConfig, authReducer)

export const store = configureStore({
	reducer: {
		// після створення апі, треба підключити наш новий редьюсер!
		// береться його назва reducer path та його редьюсер
		[todoApi.reducerPath]: todoApi.reducer,
		todoList: todoReducer,
		filter: filterReducer,
		auth: persistedReducer,
	},
	middleware: getDefaultMiddleware =>
		// обов'язково додати мідлвар
		getDefaultMiddleware({
			serializableCheck: {
				ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
			},
		}).concat(todoApi.middleware),
})
setupListeners(store.dispatch)
export const persistor = persistStore(store)
