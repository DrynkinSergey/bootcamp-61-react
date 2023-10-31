import React, { useEffect, useState } from 'react'
import { fetchUsers } from '../services/api'
import { Link } from 'react-router-dom'
import { useHttp } from '../hooks/useHttp'

const Users = () => {
	const [users, setUsers] = useHttp(fetchUsers)

	return (
		<div>
			<ul>
				{users?.map(user => (
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
