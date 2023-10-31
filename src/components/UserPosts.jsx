import React from 'react'
import { useHttp } from '../hooks/useHttp'
import { fetchPostsById } from '../services/api'
import { useParams } from 'react-router-dom'

const UserPosts = () => {
	const { userId } = useParams()
	const [posts, setPosts] = useHttp(fetchPostsById, userId)
	return (
		<div>
			<ol>
				{posts?.map(post => (
					<li key={post.id}>{post.title}</li>
				))}
			</ol>
		</div>
	)
}

export default UserPosts
