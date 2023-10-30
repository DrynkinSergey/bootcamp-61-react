// Створюємо початковий стан для стейту

export const initialState = {
	loading: false,
	error: null,
	posts: [],
	skip: 0,
	total: null,
	limit: 8,
	query: '',
	isOpen: false,
	content: null,
}

// Створюємо функцію для керування стейтом
// Приймає завжди два аргумента: стейт - поточний стан, та action - тип події та його нагрузка (payload)
export const postReducer = (state, action) => {
	console.log(action)
	const { type, payload } = action
	// Пробігаємось по типу, котрий приходить від діспатча
	switch (type) {
		// Якщо тип співпадає з тим, що є в екшені то ми робимо цю операцію
		// Якщо ні - шукаємо далі
		case 'loadMore':
			return {
				...state,
				skip: state.skip + state.limit,
			}
		case 'loading':
			return {
				...state,
				// Пейлоад - це те, що ми передаємо в якості значення з компонента
				// Це його нагрузка для редьюсера
				loading: payload,
			}
		case 'setPosts':
			return {
				...state,
				posts: [...state.posts, ...payload],
			}
		case 'setTotal':
			return {
				...state,
				total: payload,
			}
		case 'error':
			return {
				...state,
				error: payload,
			}
		case 'setQuery':
			return {
				...state,
				query: payload,
				posts: [],
				skip: 0,
			}
		// Якщо нічого не співпало - повертаємо стейт незмінним
		default:
			return state
	}
}
