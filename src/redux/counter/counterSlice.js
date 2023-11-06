import { createSlice } from '@reduxjs/toolkit'

const initialState = {
	step: 1,
	counter: 1,
	filter: 'all',
}

const counterSlice = createSlice({
	name: 'counter',
	initialState,
	reducers: {
		plus: (state, action) => {
			state.counter += state.step
		},
		minus: (state, action) => {
			state.counter -= state.step
		},
		reset: (state, action) => {
			state.counter = 1
			state.step = 1
		},
		changeStep: (state, { payload }) => {
			state.step = payload
		},
	},
})

export const { plus, minus, reset, changeStep } = counterSlice.actions

export const counterReducer = counterSlice.reducer
