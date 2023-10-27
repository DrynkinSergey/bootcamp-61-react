import React, { Component, useEffect, useState } from 'react'
import { fetchPosts, fetchPostsByQuery } from '../../services/api'
import { toast } from 'react-toastify'
import { PostList } from './PostList'
import { Button } from './Button'
import { SearcForm } from './SearcForm'
import Modal from '../Modal/Modal'
import { FidgetSpinner } from 'react-loader-spinner'

export const Posts = () => {
	const [loading, setLoading] = useState(false)
	const [error, setError] = useState(null)
	const [posts, setPosts] = useState([])
	const [skip, setSkip] = useState(0)
	const [total, setTotal] = useState(null)
	const [limit, setLimit] = useState(4)
	const [query, setQuery] = useState('')
	const [isOpen, setIsOpen] = useState(false)
	const [content, setContent] = useState(null)
	const [count, setCount] = useState(null)

	useEffect(() => {
		console.log('UPDATE')
		setCount(prev => prev + 1)
	}, [])
	useEffect(() => {
		if (query) {
			getPosts({ skip, limit, q: query, fn: fetchPostsByQuery })
		} else {
			getPosts({ skip, limit, fn: fetchPosts })
		}
	}, [limit, skip, query])

	const handleLoadMore = () => {
		// this.setState(prev => ({ skip: prev.skip + prev.limit }))
		setSkip(prev => prev + limit)
	}
	const getPosts = async ({ skip, limit, q, fn }) => {
		// this.setState({ loading: true })
		try {
			setLoading(true)
			const { posts, total } = await fn({ q, limit: 4, skip })
			setPosts(prev => [...prev, ...posts])
			setTotal(total)
			// this.setState(prev => ({ posts: [...prev.posts, ...posts], total }))
		} catch (error) {
			setError(error.message)
			// this.setState({ error: error.message })
			toast.error(error.message)
		} finally {
			setLoading(false)
			// this.setState({ loading: false })
		}
	}

	const handleSetQuery = query => {
		// this.setState({ query, posts: [], skip: 0 })
		setQuery(query)
		setPosts([])
		setSkip(0)
	}
	const toggleModal = content => {
		// this.setState(prev => ({ isOpen: !prev.isOpen, content }))
		setIsOpen(prev => !prev)
		setContent(content)
	}
	const handleLikePost = post => {
		setPosts(prev => prev.map(el => (el.id === post.id ? { ...el, reactions: el.reactions + 1 } : el)))

		//  this.setState(prev => ({
		// 	posts: prev.posts.map(el => (el.id === post.id ? { ...el, reactions: el.reactions + 1 } : el)),
		// }))
	}
	const handleNext = id => {
		setContent(posts.find(item => item.id === id))

		// this.setState({ content: this.state.posts.find(item => item.id === id) })
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

// export default class Posts extends Component {
// 	state = {
// 		loading: false,
// 		error: null,
// 		posts: [],
// 		skip: 0,
// 		total: null,
// 		limit: 4,
// 		query: '',
// 		isOpen: false,
// 		content: null,
// 	}
// 	async componentDidMount() {
// 		const { limit, skip } = this.state
// 		this.getPosts({ skip, limit, fn: fetchPosts })
// 	}

// 	 componentDidUpdate(prevProps, prevState) {
// 		const { limit, skip, query } = this.state

// 		if (!query && prevState.skip !== skip) {
// 			this.getPosts({ skip, limit, fn: fetchPosts })
// 		}
// 		if (query && (query !== prevState.query || skip !== prevState.skip)) {
// 			this.getPosts({ skip, limit, q: query, fn: fetchPostsByQuery })
// 		}
// 	}
// handleLoadMore = () => {
// 	this.setState(prev => ({ skip: prev.skip + prev.limit }))
// }
// getPosts = async ({ skip, limit, q, fn }) => {
// 	this.setState({ loading: true })
// 	try {
// 		const { posts, total } = await fn({ q, limit: 4, skip })
// 		this.setState(prev => ({ posts: [...prev.posts, ...posts], total }))
// 	} catch (error) {
// 		this.setState({ error: error.message })
// 		toast.error(error.message)
// 	} finally {
// 		this.setState({ loading: false })
// 	}
// }

// handleSetQuery = query => {
// 	this.setState({ query, posts: [], skip: 0 })
// }
// toggleModal = content => {
// 	this.setState(prev => ({ isOpen: !prev.isOpen, content }))
// }
// handleLikePost = post => {
// 	this.setState(prev => ({
// 		posts: prev.posts.map(el => (el.id === post.id ? { ...el, reactions: el.reactions + 1 } : el)),
// 	}))
// }
// handleNext = id => {
// 	this.setState({ content: this.state.posts.find(item => item.id === id) })
// }
// 	render() {
// 		const { posts, query, isOpen, content, total, loading } = this.state
// return (
// 	<div>
// 		<h1>Posts</h1>

// 		<SearcForm setQuery={this.handleSetQuery} />
// 		{query && <h2>Our query request: {query}</h2>}
// 		{total && <h2>Total posts: {total}</h2>}

// 		<h2>{this.state.error}</h2>
// 		{loading && !posts.length ? (
// 			<FidgetSpinner
// 				visible={true}
// 				height='80'
// 				width='80'
// 				ariaLabel='dna-loading'
// 				wrapperStyle={{}}
// 				wrapperClass='dna-wrapper'
// 				ballColors={['#ff0000', '#00ff00', '#0000ff']}
// 				backgroundColor='#F4442E'
// 			/>
// 		) : (
// 			<PostList handleLikePost={this.handleLikePost} toggleModal={this.toggleModal} posts={posts} />
// 		)}

// 		{total > posts.length ? (
// 			<Button onClick={this.handleLoadMore}>{loading ? 'Loading...' : 'Load more'}</Button>
// 		) : null}

// 		{isOpen ? (
// 			<Modal
// 				next={() => {
// 					const item = this.state.posts.findIndex(item => item.id === content.id)
// 					console.log(item)
// 					if (item !== this.state.posts.length) {
// 						this.handleNext(this.state.posts[item + 1]?.id)
// 					} else {
// 						this.handleNext(this.state.posts.length)
// 					}
// 				}}
// 				close={this.toggleModal}
// 			>
// 				<h1>{content.title}</h1>
// 				<h2>{content.body}</h2>
// 				<ul>
// 					{content.tags.map(tag => (
// 						<li key={tag}>{tag}</li>
// 					))}
// 				</ul>
// 			</Modal>
// 		) : null}
// 	</div>
// )
// 	}
// }
