import React from 'react'
import { NavLink } from 'react-router-dom'

export const Navbar = () => {
	return (
		<ul>
			<li>
				<NavLink to='/'>Home</NavLink>
			</li>
			<li>
				<NavLink to='/tailwind'>Tailwind</NavLink>
			</li>
			<li>
				<NavLink to='/login'>Login</NavLink>
			</li>
			<li>
				<NavLink to='/register'>Register</NavLink>
			</li>
		</ul>
	)
}
