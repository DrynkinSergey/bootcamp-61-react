import PropTypes from 'prop-types'
import { StyledCard, StyledDataList, StyledTitle } from './Section.styled'
import { StyledButton } from '../../styles/Global'
export const Section = props => {
	const { title = 'Default value', data = [], message, primary } = props

	return (
		<section>
			<StyledTitle $primary={primary}>{title}</StyledTitle>
			{message && <h2>{message}</h2>}
			<hr />
			{data.length > 0 ? (
				<StyledDataList>
					{data.map((item, idx) => (
						<StyledCard $index={idx} key={item.id}>
							{item.id}. {item.title}{' '}
							<StyledButton $size='1.2rem' $bgColor='teal'>
								Delete
							</StyledButton>
						</StyledCard>
					))}
				</StyledDataList>
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
