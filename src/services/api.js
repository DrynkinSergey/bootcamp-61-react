import axios from 'axios'
// https://dummyjson.com/posts

axios.defaults.baseURL = 'https://dummyjson.com'

export const fetchPosts = async params => {
	const { data } = await axios.get(`/posts`, {
		params: {
			...params,
		},
	})
	return data
}
