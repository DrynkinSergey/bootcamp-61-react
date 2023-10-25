import React, { Component } from 'react'
import { fetchPosts } from '../../services/api'
import { toast } from 'react-toastify'
import { PostList } from './PostList'
import { Button } from './Button'
import { SearcForm } from './SearcForm'
const INITIAL_STATE_POSTS = { loading: false, error: null, posts: [], skip: 0, limit: 4 }
export default class Posts extends Component {
	state = { ...INITIAL_STATE_POSTS }
	async componentDidMount() {
		const { limit, skip } = this.state
		this.getPosts({ skip, limit })
	}

	async componentDidUpdate(prevProps, prevState) {
		const { limit, skip } = this.state
		if (prevState.skip !== skip) {
			this.getPosts({ skip, limit })
		}
	}
	handleLoadMore = () => {
		this.setState(prev => ({ skip: prev.skip + prev.limit }))
	}
	getPosts = async ({ skip, limit }) => {
		try {
			const { posts, total } = await fetchPosts({ limit: 4, skip })
			this.setState(prev => ({ posts: [...prev.posts, ...posts] }))
		} catch (error) {
			this.setState({ error: error.message })
			toast.error(error.message)
		}
	}
	render() {
		const { posts } = this.state
		return (
			<div>
				<h1>Posts</h1>
				<SearcForm />
				<h2>{this.state.error}</h2>
				<PostList posts={posts} />
				<Button onClick={this.handleLoadMore}>Load more</Button>
			</div>
		)
	}
}
