import { useParams } from 'react-router-dom'

import { useHttp } from '../hooks/useHttp'
import { fetchPostsById } from '../services/api'

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
