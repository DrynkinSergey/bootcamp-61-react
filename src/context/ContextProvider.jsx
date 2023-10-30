import React, { createContext, useState } from 'react'

export const MyContext = createContext()
export const ContextProvider = ({ children }) => {
	const [user, setUser] = useState('')
	const [isLoggedIn, setIsLoggedIn] = useState(false)

	const login = user => {
		setUser(user)
		setIsLoggedIn(true)
	}

	const contextData = {
		user,
		isLoggedIn,
		login,
	}
	return <MyContext.Provider value={contextData}>{children}</MyContext.Provider>
}
