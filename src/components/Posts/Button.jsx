import React from 'react'
import styled from 'styled-components'

export const Button = ({ children, onClick }) => {
	return <StyledButton onClick={onClick}>{children}</StyledButton>
}

const StyledButton = styled.button`
	display: block;
	margin: 0 auto;
	padding: 8px 10px;
	font-size: 1.2rem;
	border-radius: 4px;
	background-color: teal;
	color: white;
	cursor: pointer;
	border: none;

	transition: all 0.3s ease;
	&:hover {
		background-color: #014444;
		box-shadow: 0 0 10px 2px teal;
	}
`
