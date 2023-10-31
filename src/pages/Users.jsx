import React, { useEffect, useState } from 'react'
import { fetchUsers } from '../services/api'
import { Link } from 'react-router-dom'

const Users = () => {
	const [users, setUsers] = useState([])
	useEffect(() => {
		fetchUsers().then(data => setUsers(data))
	}, [])
	return (
		<div>
			<ul>
				{users.map(user => (
					<li key={user.id}>
						{/* <Link to={`${user.id}`}> */}
						<Link to={user.id.toString()}>
							{user.lastName} {user.firstName}
						</Link>
					</li>
				))}
			</ul>
		</div>
	)
}

export default Users
