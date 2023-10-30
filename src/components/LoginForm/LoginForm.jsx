import React, { useContext, useState } from 'react'
import { MyContext } from '../../context/ContextProvider'

export const LoginForm = () => {
	const [user, setUser] = useState('')
	const { login } = useContext(MyContext)
	const handleSubmit = e => {
		e.preventDefault()
		login(user)
	}
	return (
		<div>
			<form onSubmit={handleSubmit}>
				<input type='text' value={user} onChange={e => setUser(e.target.value)} />
				<button>Login</button>
			</form>
		</div>
	)
}
