export const Section = props => {
	console.log(props)
	const { title, data } = props
	return (
		<section>
			<h1>{title}</h1>
			<hr />
			<ul>
				{data.map(item => (
					<li key={item.id}>
						{item.id}. {item.title} <button>Delete</button>
					</li>
				))}
			</ul>
		</section>
	)
}
