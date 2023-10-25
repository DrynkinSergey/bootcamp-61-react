import React, { Component } from 'react'
import { fetchPosts, fetchPostsByQuery } from '../../services/api'
import { toast } from 'react-toastify'
import { PostList } from './PostList'
import { Button } from './Button'
import { SearcForm } from './SearcForm'
import Modal from '../Modal/Modal'
import { FidgetSpinner } from 'react-loader-spinner'

// Перетворили на классовий компонент
export default class Posts extends Component {
	// Додали стейт для збереження даних та для обробки запитів
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
	// Виконуємо перший запит за постами
	async componentDidMount() {
		const { limit, skip } = this.state
		// перевикористовуємо готову функцію для запиту
		this.getPosts({ skip, limit, fn: fetchPosts })
	}

	// Руагуємо на вхідні дані для запиту
	async componentDidUpdate(prevProps, prevState) {
		// дестриктуризуємо стейт
		const { limit, skip, query } = this.state
		// перевіряємо чи є в нас строка для пошуку
		// якщо нема  перевіряємо чи змінився наш skip
		// якщо змінився робимо запит
		if (!query && prevState.skip !== skip) {
			// запит йде через функцію обгортку, для збереження чистоти
			this.getPosts({ skip, limit, fn: fetchPosts })
		}
		// перевіряємо чи є строка пошуку ми робимо перевірку на скіп або цю строчку
		// якщо щось з цього міняється - робимо новий запит
		if (query && (query !== prevState.query || skip !== prevState.skip)) {
			// запит йде через функцію обгортку, для збереження чистоти
			this.getPosts({ skip, limit, q: query, fn: fetchPostsByQuery })
		}
	}
	// Змінюємо наш скіп (це може бути номер сторінки page = 2)
	handleLoadMore = () => {
		this.setState(prev => ({ skip: prev.skip + prev.limit }))
	}
	// Cтворення функції обгортки, приймає параметри для виконання
	getPosts = async ({ skip, limit, q, fn }) => {
		// Робимо загрузку в тру, для показу лоадера
		this.setState({ loading: true })
		// Трай кетч для відлову помилок
		try {
			// Отримуємо данні з запиту, одразу дестриктуризуємо їх
			// Витягуємо що нам потрібно
			const { posts, total } = await fn({ q, limit: 4, skip })
			// Встановлюємо ці дані в стейт
			this.setState(prev => ({ posts: [...prev.posts, ...posts], total }))
		} catch (error) {
			// Ловимо помилку
			this.setState({ error: error.message })
			// Показуємо її в тості
			toast.error(error.message)
		} finally {
			// Зупиняємо лоадер, якщо у нас прийшли дані, або трапилась помилка
			this.setState({ loading: false })
		}
	}

	// підв'язумо до стейта наш інпут для пошуку
	handleSetQuery = query => {
		this.setState({ query, posts: [], skip: 0 })
	}
	// перемикач для модалки, котрий приймає також наш пост, котрий в майбутньому буде в модалці малюватись
	toggleModal = content => {
		this.setState(prev => ({ isOpen: !prev.isOpen, content }))
	}
	// Обрибка лайка
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
				{/* Якщо є квері - показуємо */}
				{query && <h2>Our query request: {query}</h2>}
				{/* Якщо є тотал - показуємо */}
				{total && <h2>Total posts: {total}</h2>}

				<h2>{this.state.error}</h2>
				{/* перевіряємо на загрузку, якщо вона є , і немає в нас ще даних - показуємо лоадер */}
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

				{/* Якщо тотал (кількість елементів, котрі приходять з беку) більше ніж наша кількість загружених даних - показуємо кнопку дозагрузити */}
				{total > posts.length ? (
					<Button onClick={this.handleLoadMore}>{loading ? 'Loading...' : 'Load more'}</Button>
				) : null}

				{/* Перевірка на відкриту модалку */}
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
