export const Section = props => {
	console.log(props)
	const { title = 'Default value', data = [] } = props

	return (
		<section>
			<h1>{title}</h1>
			<hr />
			{data.length > 0 ? (
				<ul>
					{data.map(item => (
						<li key={item.id}>
							{item.id}. {item.title} <button>Delete</button>
						</li>
					))}
				</ul>
			) : (
				<h2>No data</h2>
			)}
		</section>
	)
}
