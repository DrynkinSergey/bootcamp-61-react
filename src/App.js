import 'modern-normalize'
import { Section } from './components/Section'

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
	return (
		<div>
			<Section title='Favourites films' data={moviesData} />
			<Section title='Goods' data={goodsData} />
		</div>
	)
}

export default App
