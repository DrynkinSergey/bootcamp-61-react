import axios from 'axios'
// https://dummyjson.com/posts

axios.defaults.baseURL = 'https://dummyjson.com'
const key = ''

export const fetchPosts = async params => {
	const { data } = await axios.get(`/posts`, {
		params: {
			...params,
		},
	})
	return data
}
export const fetchPostsByQuery = async params => {
	const { data } = await axios.get(`/posts/search`, {
		params: {
			...params,
		},
	})
	return data
}
