import React, { useEffect, useState } from 'react'
import { fetchUsers } from '../services/api'
import { Link, useLocation } from 'react-router-dom'
import { useHttp } from '../hooks/useHttp'

const Users = () => {
	const [users, setUsers] = useHttp(fetchUsers)
	const location = useLocation()
	return (
		<div>
			<ul>
				{users?.map(user => (
					<li key={user.id}>
						{/* <Link to={`${user.id}`}> */}
						{/* /users/12 */}
						{/* /users/121 */}
						<Link state={{ from: location }} to={user.id.toString()}>
							{user.lastName} {user.firstName}
						</Link>
					</li>
				))}
			</ul>
		</div>
	)
}

export default Users
