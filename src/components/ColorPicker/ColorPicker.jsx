import React from 'react'
import { StyledBackgroundTheme, StyledColorPalette, StyledColor, StyledColorsList } from './ColorPicker.styled'

export class ColorPicker extends React.Component {
	state = {
		colors: this.props.colors,
		currentColor: 'white',
	}
	handleChangeColor = color => {
		this.setState({ currentColor: color })
	}
	render() {
		const { colors, currentColor } = this.state
		return (
			<StyledBackgroundTheme $bg={currentColor}>
				<StyledColorPalette>
					<h1>Current color : {currentColor}</h1>
					<StyledColorsList>
						{colors.map(item => {
							const bg = Math.floor(Math.random() * 16777215).toString(16)
							return (
								<StyledColor $bgItem={bg} onClick={() => this.handleChangeColor(item.color)} key={item.id}>
									{item.color}
								</StyledColor>
							)
						})}
					</StyledColorsList>
				</StyledColorPalette>
			</StyledBackgroundTheme>
		)
	}
}
