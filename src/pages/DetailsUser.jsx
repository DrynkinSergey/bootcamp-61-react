import React, { useEffect, useState } from 'react'
import { Outlet, useParams } from 'react-router-dom'
import { fetchUserById } from '../services/api'
import { useHttp } from '../hooks/useHttp'
import { StyledLink } from '../components/Navbar'

const DetailsUser = () => {
	const { userId } = useParams()
	console.log(userId)

	const [user, setUser] = useHttp(fetchUserById, userId)

	if (!user) {
		return <h2>Loading...</h2>
	}
	return (
		<div>
			<img src={user.image} alt={user.firstName} />
			<p>Name: {user.firstName}</p>
			<p>Surname: {user.lastName}</p>
			<p>Age: {user.age}</p>
			<p>Email: {user.email}</p>

			<div>
				<StyledLink to='about'> About </StyledLink>
				<StyledLink to='posts'> Posts </StyledLink>
			</div>
			<div>
				<Outlet />
			</div>
		</div>
	)
}

export default DetailsUser
