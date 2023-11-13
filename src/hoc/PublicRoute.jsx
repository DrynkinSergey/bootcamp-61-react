import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'

import { selectIsLoggedIn } from '../redux/auth/selectors'

export const PublicRoute = ({ children }) => {
	const isLoggedIn = useSelector(selectIsLoggedIn)
	if (isLoggedIn) {
		return <Navigate to='/' />
	}
	return children
}
