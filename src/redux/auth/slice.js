import { createSlice, isAnyOf } from '@reduxjs/toolkit'
import { loginThunk, registerThunk } from './operations'

const initialState = {
	user: {
		name: '',
		email: '',
	},
	token: '',
	isLoggedIn: false,
}

const slice = createSlice({
	name: 'auth',
	initialState,
	extraReducers: builder => {
		builder.addMatcher(isAnyOf(registerThunk.fulfilled, loginThunk.fulfilled), (state, { payload }) => {
			state.user.name = payload.user.name
			state.user.email = payload.user.email
			state.token = payload.token
			state.isLoggedIn = true
		})
	},
})

export const authReducer = slice.reducer
