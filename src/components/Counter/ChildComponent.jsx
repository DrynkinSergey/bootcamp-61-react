import React from 'react'

const ChildComponent = React.memo(({ value, onClick }) => {
	console.log('rerender child')
	return (
		<div>
			<h1>Hello</h1>
			{value}
		</div>
	)
})

export { ChildComponent }
