import React from 'react'
import PropTypes from 'prop-types'
export const Button = props => {
	return <button className='button'>{props.children}</button>
}

Button.propTypes = {
	children: PropTypes.node,
}
