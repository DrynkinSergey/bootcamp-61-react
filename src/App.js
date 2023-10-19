import 'modern-normalize'
import s from './App.module.css'
import { Section } from './components/Section/Section'
import { Button } from './components/Button'
import { Modal } from './components/Modal'
import { PropTypesTest } from './components/PropTypesTest'
import { UserCard } from './components/UserCard/UserCard'
import userData from './assets/users.json'
import { Article } from './components/Article/Article'

function App() {
	const moviesData = [
		{
			id: 1,
			title: 'Batman',
		},
		{
			id: 2,
			title: 'Terminator',
		},
		{
			id: 5,
			title: 'Titanic',
		},
		{
			id: 3,
			title: 'Taxi',
		},
		{
			id: 4,
			title: 'Tom & Jerry',
		},
	]
	const goodsData = [
		{
			id: 1,
			title: 'Carrots',
		},
		{
			id: 3,
			title: 'Carrots',
		},
		{
			id: 2,
			title: 'Milk',
		},
	]
	const isOnline = true
	return (
		<div className={s.wrapper}>
			<Section primary message='Hello' title='Favourites films' data={moviesData} />
			<Section primary title='Goods' data={goodsData} />
			<h1 className='title'>{isOnline ? 'Online' : 'Offline'}</h1>
			<h2>{isOnline && 'Welcome back'}</h2>
			<h2>{isOnline || 'Lets login'}</h2>
			<Button>
				<div>
					Text
					{true}
				</div>
			</Button>
			<Button>Logout</Button>
			<Button>Submit</Button>

			{isOnline ? (
				<Modal title='Продаж та реклама'>
					<h2>Продам диван</h2>
					<img
						className={s.modalImg}
						alt='sofa'
						src='https://krovato.com/image/cache/catalog/izobrazhenie_viber_2022-04-20_13-53-05-574-1200x900.jpg'
					/>
				</Modal>
			) : (
				<Modal title='Login'>
					<h2>Please login to view adv</h2>
				</Modal>
			)}

			<PropTypesTest array={['a', 'b']} num='2' typeOfMovie='drama' />
			<UserCard {...userData[1]} />
			<Article />
		</div>
	)
}

export default App
