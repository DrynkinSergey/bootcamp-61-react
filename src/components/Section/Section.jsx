import PropTypes from 'prop-types'
import css from './Section.module.css'
import clsx from 'clsx'
export const Section = props => {
	const { title = 'Default value', data = [], message, primary } = props

	return (
		<section>
			<h1
				className={clsx(css.title, css.italic, {
					[css.bigText]: primary,
					[css.minText]: !primary,
				})}
			>
				{title}
			</h1>
			{message && <h2>{message}</h2>}
			<hr />
			{data.length > 0 ? (
				<ul className={css.list}>
					{data.map(item => (
						<li className={css.item} key={item.id}>
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
