import React from 'react'
import PropTypes from 'prop-types'
import { StyledButton } from '../styles/Global'
export const Button = props => {
	return <StyledButton>{props.children}</StyledButton>
}

Button.propTypes = {
	children: PropTypes.node,
}
