import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'

// const element = React.createElement('a', { href: '/', alt: 'Link', id: 'MyLink' }, 'My link')
// // <a href='/' alt='Photo' width={400}>My link</a>

// console.log(element)
// const elem2 = React.createElement(
// 	'div',
// 	{},
// 	React.createElement(
// 		'div',
// 		{ id: 'wrapper' },
// 		React.createElement('h1', {}, React.createElement('span', {}, 'Hello its so hard'))
// 	)
// )

// const elem2Jsx = (
// 	<div>
// 		<div id='wrapper'>
// 			<h1>
// 				<span>Hello its so hard</span>
// 			</h1>
// 		</div>
// 	</div>
// )
// const Header = () => {
// 	return (
// 		<header>
// 			Logo
// 			<hr />
// 		</header>
// 	)
// }
// const FooterComponent = () => {
// 	return (
// 		<footer>
// 			<hr />
// 			<h2>Copyright 2023</h2>
// 		</footer>
// 	)
// }

// const Wrapper = () => {
// 	const text = 'Hello jsx'

// 	return (
// 		<div>
// 			<Header />
// 			<div id='wrapper'>
// 				<h1>
// 					<span>Hello its so hard</span>
// 				</h1>
// 				<h2>{text}</h2>
// 				<h3>{1 + 12}</h3>
// 			</div>
// 			<FooterComponent />
// 		</div>
// 	)
// }

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<App />)
