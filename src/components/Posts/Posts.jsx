import React, { Component } from 'react'
import { fetchPosts, fetchPostsByQuery } from '../../services/api'
import { toast } from 'react-toastify'
import { PostList } from './PostList'
import { Button } from './Button'
import { SearcForm } from './SearcForm'
import Modal from '../Modal/Modal'
import { FidgetSpinner } from 'react-loader-spinner'

export default class Posts extends Component {
	state = {
		loading: false,
		error: null,
		posts: [],
		skip: 0,
		total: null,
		limit: 4,
		query: '',
		isOpen: false,
		content: null,
	}
	async componentDidMount() {
		const { limit, skip } = this.state
		this.getPosts({ skip, limit, fn: fetchPosts })
	}

	async componentDidUpdate(prevProps, prevState) {
		const { limit, skip, query } = this.state

		if (!query && prevState.skip !== skip) {
			this.getPosts({ skip, limit, fn: fetchPosts })
		}
		if (query && (query !== prevState.query || skip !== prevState.skip)) {
			this.getPosts({ skip, limit, q: query, fn: fetchPostsByQuery })
		}
	}
	handleLoadMore = () => {
		this.setState(prev => ({ skip: prev.skip + prev.limit }))
	}
	getPosts = async ({ skip, limit, q, fn }) => {
		this.setState({ loading: true })
		try {
			const { posts, total } = await fn({ q, limit: 4, skip })
			this.setState(prev => ({ posts: [...prev.posts, ...posts], total }))
		} catch (error) {
			this.setState({ error: error.message })
			toast.error(error.message)
		} finally {
			this.setState({ loading: false })
		}
	}

	handleSetQuery = query => {
		this.setState({ query, posts: [], skip: 0 })
	}
	toggleModal = content => {
		this.setState(prev => ({ isOpen: !prev.isOpen, content }))
	}
	handleLikePost = post => {
		this.setState(prev => ({
			posts: prev.posts.map(el => (el.id === post.id ? { ...el, reactions: el.reactions + 1 } : el)),
		}))
	}
	handleNext = id => {
		this.setState({ content: this.state.posts.find(item => item.id === id) })
	}
	render() {
		const { posts, query, isOpen, content, total, loading } = this.state
		return (
			<div>
				<h1>Posts</h1>

				<SearcForm setQuery={this.handleSetQuery} />
				{query && <h2>Our query request: {query}</h2>}
				{total && <h2>Total posts: {total}</h2>}

				<h2>{this.state.error}</h2>
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
					<PostList handleLikePost={this.handleLikePost} toggleModal={this.toggleModal} posts={posts} />
				)}

				{total > posts.length ? (
					<Button onClick={this.handleLoadMore}>{loading ? 'Loading...' : 'Load more'}</Button>
				) : null}

				{isOpen ? (
					<Modal
						next={() => {
							const item = this.state.posts.findIndex(item => item.id === content.id)
							console.log(item)
							if (item !== this.state.posts.length) {
								this.handleNext(this.state.posts[item + 1]?.id)
							} else {
								this.handleNext(this.state.posts.length)
							}
						}}
						close={this.toggleModal}
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
}
