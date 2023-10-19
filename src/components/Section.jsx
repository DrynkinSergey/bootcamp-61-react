import PropTypes from 'prop-types'

export const Section = props => {
	const { title = 'Default value', data = [], message } = props

	return (
		<section>
			<h1>{title}</h1>
			{message && <h2>{message}</h2>}
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
//[{id:1, title:123213},{}]
Section.propTypes = {
	title: PropTypes.string.isRequired,
	message: PropTypes.string,
	data: PropTypes.arrayOf(
		PropTypes.shape({
			id: PropTypes.number.isRequired,
			title: PropTypes.string.isRequired,
		})
	),
}
