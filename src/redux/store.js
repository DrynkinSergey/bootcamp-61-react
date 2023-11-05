import { combineReducers, createStore } from 'redux'
import { counterReducer } from './counter/reducer'
import { devToolsEnhancer } from '@redux-devtools/extension'
import { todoReducer } from './todoList/reducer'

const rootReducer = combineReducers({
	count: counterReducer,
	todoList: todoReducer,
})

const enhancer = devToolsEnhancer()

export const store = createStore(rootReducer, enhancer)
