import React, { Suspense, useEffect, useRef, useState } from 'react'
import { Link, Outlet, useLocation, useParams } from 'react-router-dom'
import { fetchUserById } from '../services/api'
import { useHttp } from '../hooks/useHttp'
import { StyledLink } from '../components/Navbar'

const DetailsUser = () => {
	const { userId } = useParams()
	const location = useLocation()
	// console.log(location)
	const goBackRef = useRef(location.state?.from || '/')
	const [user, setUser] = useHttp(fetchUserById, userId)

	if (!user) {
		return <h2>Loading...</h2>
	}
	return (
		<div>
			<Link to={goBackRef.current}>Go back</Link>
			<img src={user.image} alt={user.firstName} />
			<p>Name: {user.firstName}</p>
			<p>Surname: {user.lastName}</p>
			<p>Age: {user.age}</p>
			<p>Email: {user.email}</p>

			<div style={{ display: 'flex', gap: '20px' }}>
				<StyledLink to='about'> About </StyledLink>
				<StyledLink to='posts'> Posts </StyledLink>
			</div>
			<div>
				<Suspense fallback={<h1>Load second outlet</h1>}>
					<Outlet />
				</Suspense>
			</div>
		</div>
	)
}

export default DetailsUser
