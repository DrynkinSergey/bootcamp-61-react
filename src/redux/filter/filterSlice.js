import { createSlice } from '@reduxjs/toolkit'

const filterSlice = createSlice({
	name: 'filter',
	initialState: { filter: 'all' },
	reducers: {
		setFilter: (state, { payload }) => {
			state.filter = payload
		},
	},
})

export const { setFilter } = filterSlice.actions
export const filterReducer = filterSlice.reducer
