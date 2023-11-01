import React, { useEffect, useState } from 'react'
import { fetchUsers } from '../services/api'
import { Link, useLocation, useSearchParams } from 'react-router-dom'
import { useHttp } from '../hooks/useHttp'

const Users = () => {
	const [users, setUsers] = useHttp(fetchUsers)
	const location = useLocation()

	const [searchParams, setSearchParams] = useSearchParams()

	const name = searchParams.get('name') ?? ''
	const page = searchParams.get('page') ?? ''
	const query = searchParams.get('query') ?? ''
	// console.log(name, typeof name)
	// console.log(page, typeof page)
	// console.log(query, typeof query)
	const handleChangeParams = e => {
		const value = e.target.value
		setSearchParams(value ? { name: value, page: 1, query: true } : {})
	}

	const getFilteredData = () => {
		return users?.filter(user => user.firstName.toLowerCase().includes(name.toLowerCase()))
	}
	return (
		<div>
			<input value={name} onChange={handleChangeParams} />
			<h2>Filter value is : {name}</h2>
			<ul>
				{getFilteredData()?.map(user => (
					<li key={user.id}>
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
