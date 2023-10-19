import styled from 'styled-components'

export const StyledArticleWrapper = styled.article`
	padding: 20px 10px;
	color: ${props => props.theme.colors.main};
	background-color: ${props => props.theme.colors.article};
	h2 {
		box-shadow: ${props => props.theme.shadows.xs};
	}
`
