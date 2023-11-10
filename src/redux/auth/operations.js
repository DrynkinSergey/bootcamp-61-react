import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

export const goItApi = axios.create({
	baseURL: 'https://goit-task-manager.herokuapp.com/',
})

const setToken = token => {
	goItApi.defaults.headers.common.Authorization = `Bearer ${token}`
}
const clearToken = () => {
	goItApi.defaults.headers.common.Authorization = ''
}

// axios.defaults.baseURL = 'https://goit-task-manager.herokuapp.com/'

export const registerThunk = createAsyncThunk('register', async (credentials, thunkApi) => {
	try {
		const { data } = await goItApi.post('users/signup', credentials)
		setToken(data.token)
		return data
	} catch (error) {
		return thunkApi.rejectWithValue(error.message)
	}
})

export const loginThunk = createAsyncThunk('login', async (credentials, thunkApi) => {
	try {
		const { data } = await goItApi.post('users/login', credentials)
		setToken(data.token)
		return data
	} catch (error) {
		return thunkApi.rejectWithValue(error.message)
	}
})

export const logoutThunk = createAsyncThunk('logout', async (_, thunkApi) => {
	try {
		goItApi.post('users/logout')
		clearToken()
	} catch (error) {
		return thunkApi.rejectWithValue(error.message)
	}
})

export const refreshThunk = createAsyncThunk('refresh', async (_, thunkApi) => {
	const savedToken = thunkApi.getState().auth.token
	if (!savedToken) {
		return thunkApi.rejectWithValue('Token is not exist')
	}
	try {
		setToken(savedToken)
		const { data } = await goItApi.get('users/me')
		return data
	} catch (error) {
		return thunkApi.rejectWithValue(error.message)
	}
})
