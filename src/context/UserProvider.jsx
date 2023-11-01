import { createContext, useState } from 'react'

export const UserContext = createContext()

export const UserProvider = ({ children }) => {
	const [user, setUser] = useState(null)
	const [isLoggedIn, setIsLoggedIn] = useState(true)
	const login = () => {
		setIsLoggedIn(true)
	}
	const register = data => {
		setUser(data)
	}
	const logout = () => {
		setIsLoggedIn(false)
	}
	const contextValue = {
		user,
		login,
		register,
		logout,
		isLoggedIn,
	}

	return <UserContext.Provider value={contextValue}>{children}</UserContext.Provider>
}
