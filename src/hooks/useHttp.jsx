import { useEffect, useState } from 'react'

export const useHttp = (fn, param) => {
	const [data, setData] = useState(null)
	const [error, setError] = useState(null)
	useEffect(() => {
		fn(param)
			.then(data => setData(data))
			.catch(error => setError(error.message))
	}, [param, fn])
	return [data, setData, { error }]
}
