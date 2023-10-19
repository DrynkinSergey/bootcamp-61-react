import styled, { createGlobalStyle } from 'styled-components'

export const StyledButton = styled.button`
	padding: 10px 14px;
	background-color: ${props => props.$bgColor || 'white'};
	font-size: ${props => props.$size || '1rem'};
`
export const GlobalStyles = createGlobalStyle`
  body{
    background-color: green;
  }

`
