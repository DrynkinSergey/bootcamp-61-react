import { useContext } from 'react'
import { UserContext } from '../context/UserProvider'
import { Navigate, useLocation } from 'react-router-dom'

export const PrivateRoute = ({ children }) => {
	const location = useLocation()
	const { isLoggedIn } = useContext(UserContext)
	if (isLoggedIn) {
		return children
	}
	return <Navigate to='/register' state={{ from: location }} />
}
