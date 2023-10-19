import 'modern-normalize'
import { Section } from './components/Section'
import { Button } from './components/Button'
import { Modal } from './components/Modal'
import { PropTypesTest } from './components/PropTypesTest'

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
		<div>
			<Section message='Hello' title='Favourites films' data={moviesData} />
			<Section title='Goods' data={goodsData} />
			<h1>{isOnline ? 'Online' : 'Offline'}</h1>
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
						alt='sofa'
						src='https://krovato.com/image/cache/catalog/izobrazhenie_viber_2022-04-20_13-53-05-574-1200x900.jpg'
					/>
				</Modal>
			) : (
				<Modal title='Login'>
					<h2>Please login to view adv</h2>
				</Modal>
			)}

			<PropTypesTest array={['a', 'b']} typeOfMovie='drama' />
		</div>
	)
}

export default App
