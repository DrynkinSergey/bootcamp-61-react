import React, { Component, useEffect, useReducer, useState } from 'react'
import { fetchPosts, fetchPostsByQuery } from '../../services/api'
import { toast } from 'react-toastify'
import { PostList } from './PostList'
import { Button } from './Button'
import { SearcForm } from './SearcForm'
import Modal from '../Modal/Modal'
import { FidgetSpinner } from 'react-loader-spinner'
import { initialState, postReducer } from '../../store/reducer'

export const Posts = () => {
	//* Використовуємо вже підготовані редьюсер та початковий стан
	// В результаті отримуємо дві сущності - state, dispatch - функція для відправки action
	// Події, що треба зробити. Зі своїм type

	const [state, dispatch] = useReducer(postReducer, initialState)
	const { loading, error, posts, skip, limit, total, query, isOpen, content } = state

	useEffect(() => {
		if (query) {
			getPosts({ skip, limit, q: query, fn: fetchPostsByQuery })
		} else {
			getPosts({ skip, limit, fn: fetchPosts })
		}
	}, [limit, skip, query])

	const handleLoadMore = () => {
		dispatch({ type: 'loadMore' })
	}
	const getPosts = async ({ skip, limit, q, fn }) => {
		try {
			// Вказуємо, що трапилась загрузка
			dispatch({ type: 'loading', payload: true })
			const { posts, total } = await fn({ q, limit: 4, skip })
			// Після закінчення запиту робимо діспатч наших даних.
			// Відправляємо в payload - результат виконання запиту
			dispatch({ type: 'setPosts', payload: posts })
			dispatch({ type: 'setTotal', payload: total })
		} catch (error) {
			dispatch({ type: 'error', payload: error.message })
			toast.error(error.message)
		} finally {
			// Вказуємо, що  загрузка закінчилась

			dispatch({ type: 'loading', payload: false })
		}
	}

	const handleSetQuery = query => {
		dispatch({ type: 'setQuery', payload: query })
	}
	const toggleModal = content => {
		// setIsOpen(prev => !prev)
		// setContent(content)
	}
	const handleLikePost = post => {
		// setPosts(prev => prev.map(el => (el.id === post.id ? { ...el, reactions: el.reactions + 1 } : el)))
	}
	const handleNext = id => {
		// setContent(posts.find(item => item.id === id))
	}

	return (
		<div>
			<h1>Posts</h1>

			<SearcForm setQuery={handleSetQuery} />
			{query && <h2>Our query request: {query}</h2>}
			{total && <h2>Total posts: {total}</h2>}

			<h2>{error}</h2>
			{loading && !posts.length ? (
				<FidgetSpinner
					visible={true}
					height='80'
					width='80'
					ariaLabel='dna-loading'
					wrapperStyle={{}}
					wrapperClass='dna-wrapper'
					ballColors={['#ff0000', '#00ff00', '#0000ff']}
					backgroundColor='#F4442E'
				/>
			) : (
				<PostList handleLikePost={handleLikePost} toggleModal={toggleModal} posts={posts} />
			)}

			{total > posts.length ? <Button onClick={handleLoadMore}>{loading ? 'Loading...' : 'Load more'}</Button> : null}

			{isOpen ? (
				<Modal
					next={() => {
						const item = posts.findIndex(item => item.id === content.id)
						if (item + 1 !== posts.length) {
							handleNext(posts[item + 1]?.id)
						} else {
							handleNext(posts[0].id)
						}
					}}
					close={toggleModal}
				>
					<h1>{content.title}</h1>
					<h2>{content.body}</h2>
					<ul>
						{content.tags.map(tag => (
							<li key={tag}>{tag}</li>
						))}
					</ul>
				</Modal>
			) : null}
		</div>
	)
}
