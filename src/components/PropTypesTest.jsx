import React from 'react'
import PropTypes from 'prop-types'
export const PropTypesTest = ({ array, typeOfMovie, num }) => {
	return <div>{num}</div>
}

PropTypesTest.propTypes = {
	typeOfMovie: PropTypes.oneOf(['cartoon', 'film', 'drama']),
	array: PropTypes.arrayOf(PropTypes.string),
	num: PropTypes.number,
}
