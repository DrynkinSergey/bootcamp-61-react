// Етапи створення редакс
// 0. Встановити npm i redux react-redux   !!!!!!
// 1. Створити папку Redux
// 2. Створити папку з фічею (contacts, users, todos, filters)
// 3. Створити базову структуру в цій папці (reducer,actions,constants,selectors)
// 4. Зайти в reducer , Створити initialState та reducer - функцію
// 5. Стоврюємо store в котрому використаємо createStore(first, second) - first: reducer, або rootReducer , second: devToolsRedux enhancer або строка
// 6. Огортаємо в index.js наш  App компонентом Provider передаючи пропс store
// 7. Використовуємо useSelector та useDispatch вже в компоненті
import { combineReducers, createStore } from 'redux'
import { counterReducer } from './counter/reducer'
import { devToolsEnhancer } from '@redux-devtools/extension'
import { todoReducer } from './todoList/reducer'

// Об'єднання в один великий reducer (об'єкт ) декілька маленьких. Їх може бути 2,5,6
const rootReducer = combineReducers({
	count: counterReducer,
	todoList: todoReducer,
})

const enhancer = devToolsEnhancer()
// Створюємо сам стор, і екпортуємо

export const store = createStore(
	// Приймає першим аргументом reducer або якщо їх багато rootReducer
	rootReducer,
	enhancer
	// window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)
