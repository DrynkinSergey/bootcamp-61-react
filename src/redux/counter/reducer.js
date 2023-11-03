import { MINUS, PLUS, RESET } from './constants'

const initialState = {
	step: 1,
	counter: 1,
}

export const counterReducer = (state = initialState, action) => {
	console.log(action)
	switch (action.type) {
		case PLUS: {
			return { ...state, counter: state.counter + state.step }
		}
		case MINUS: {
			return { ...state, counter: state.counter - state.step }
		}
		case RESET: {
			return { ...initialState }
		}
		default:
			return state
	}
}
