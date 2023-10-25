import React from 'react'
import { PostCard } from './PostCard'
import styled from 'styled-components'

export const PostList = ({ handleLikePost, toggleModal, posts = [] }) => {
	// const getSmth = ({ fn }) => {
	// 	fn()
	// 	console.log('Your fn is done!')
	// }
	// const getSum = () => {
	// 	console.log(1 + 2)
	// }

	// getSmth({ fn: getSum })
	// getSmth({ fn: () => console.log('Hello') })

	return (
		<StyledList>
			{posts.map(post => (
				<PostCard handleLikePost={handleLikePost} toggleModal={toggleModal} key={post.id} {...post} />
			))}
		</StyledList>
	)
}

const StyledList = styled.ul`
	list-style: none;
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
	gap: 10px;
	max-width: 90%;
	margin: 0 auto;
	padding: 0;
	margin-bottom: 20px;
`
