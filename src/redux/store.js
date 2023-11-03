import { combineReducers, createStore } from 'redux'
import { counterReducer } from './counter/reducer'
import { devToolsEnhancer } from '@redux-devtools/extension'

const rootReducer = combineReducers({
	count: counterReducer,
})

const enhancer = devToolsEnhancer()
export const store = createStore(
	rootReducer,
	enhancer
	// window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)
