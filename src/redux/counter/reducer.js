import { createReducer } from '@reduxjs/toolkit'
import { changeStep, decrement, increment, reset } from './actions'
import { CHANGE_INPUT, MINUS, PLUS, RESET } from './constants'

const initialState = {
	step: 1,
	counter: 1,
}

// builder callback
export const counterReducer = createReducer(initialState, builder => {
	builder
		.addCase(increment, (state, action) => {
			state.counter += state.step
		})
		.addCase(decrement, (state, action) => {
			state.counter -= state.step
		})
		.addCase(reset, (state, action) => {
			state.counter = 1
			state.step = 1
		})
		.addCase(changeStep, (state, { payload }) => {
			state.step = payload
		})
})

// createReducer object notation
// export const counterReducer = createReducer(initialState, {
// 	// [increment]: (state, action) => {
// 	// 	return {
// 	// 		...state,
// 	// 		counter: state.counter + state.step,
// 	// 	}
// 	// },
// 	[increment]: (state, action) => {
// 		state.counter += state.step
// 	},
// 	[decrement]: (state, action) => {
// 		if (state.counter > -2) {
// 			state.counter -= state.step
// 		}
// 	},
// 	[reset]: (state, action) => {
// 		state.counter = 0
// 		state.step = 1
// 	},
// 	[changeStep]: (state, { payload }) => {
// 		state.step = payload
// 	},
// })

// export const counterReducer = (state = initialState, action) => {
// 	switch (action.type) {
// 		case increment.type: {
// 			return { ...state, counter: state.counter + state.step }
// 		}
// 		case decrement.type: {
// 			return { ...state, counter: state.counter - state.step }
// 		}
// 		case reset.type: {
// 			return { ...initialState }
// 		}
// 		case changeStep.type: {
// 			return {
// 				...state,
// 				step: action.payload,
// 			}
// 		}
// 		default:
// 			return state
// 	}
// }
