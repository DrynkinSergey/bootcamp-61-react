import React from 'react'

export const CustomError = ({ errors, name, message }) => {
	return errors[name] && <div>{message || errors[name].message}</div>
}
