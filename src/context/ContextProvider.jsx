import axios from 'axios'
import React, { createContext, useEffect, useState } from 'react'

export const MyContext = createContext()
export const ContextProvider = ({ children }) => {
	const [todos, setTodos] = useState([])
	const [user, setUser] = useState('')
	const [isLoggedIn, setIsLoggedIn] = useState(false)
	useEffect(() => {
		axios.get('https://dummyjson.com/todos').then(res => setTodos(res.data.todos))
	}, [])

	const login = user => {
		setUser(user)
		setIsLoggedIn(true)
	}
	const logout = () => {
		setIsLoggedIn('')
		setUser('')
	}

	const contextData = {
		user,
		isLoggedIn,
		login,
		logout,
		todos,
		setTodos,
	}
	return <MyContext.Provider value={contextData}>{children}</MyContext.Provider>
}
