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

export const fetchUsers = async params => {
	const { data } = await axios.get('/users', { params: { ...params } })
	return data.users
}
export const fetchUserById = async id => {
	const { data } = await axios.get(`/users/${id}`)
	return data
}
export const fetchPostsById = async id => {
	const { data } = await axios.get(`https://dummyjson.com/posts/user/${id}`)
	return data.posts
}
