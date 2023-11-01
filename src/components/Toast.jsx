import React, { useEffect } from 'react'
import { toast } from 'react-toastify'

const Toast = () => {
	useEffect(() => {
		toast.info('Page is loading...')
	}, [])
	return <div></div>
}

export default Toast
