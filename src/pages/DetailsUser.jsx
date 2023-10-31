import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { fetchUserById } from '../services/api'

const DetailsUser = () => {
	const { userId } = useParams()
	console.log(userId)
	const [user, setUser] = useState(null)
	useEffect(() => {
		fetchUserById(userId).then(data => setUser(data))
	}, [userId])
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
		</div>
	)
}

export default DetailsUser
