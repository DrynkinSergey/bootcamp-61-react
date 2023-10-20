import PropTypes from 'prop-types'
import React from 'react'

export const Filter = ({ setFilter, filterStr }) => {
	return <input value={filterStr} placeholder='Enter filter value' onChange={setFilter} />
}

Filter.propTypes = {
	setFilter: PropTypes.func.isRequired,
	filterStr: PropTypes.string.isRequired,
}
