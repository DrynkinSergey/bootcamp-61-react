import React from 'react'

export const Input = ({ register, type = 'text', placeholder, name }) => {
	return (
		<input
			className='border-2 border-black rounded-md px-2 py-2 text-lg'
			type={type}
			placeholder={placeholder}
			{...register(name)}
		/>
	)
}
