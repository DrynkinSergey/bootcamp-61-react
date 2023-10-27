import React, { useState } from 'react'
import { StyledBackgroundTheme, StyledColorPalette, StyledColor, StyledColorsList } from './ColorPicker.styled'

export const ColorPicker = props => {
	const [colors, setColors] = useState(props.colors)
	const [currentColor, setCurrentColor] = useState('white')

	const handleChangeColor = selectedColor => {
		setCurrentColor(selectedColor)
	}

	return (
		<div>
			<StyledBackgroundTheme $bg={currentColor}>
				<StyledColorPalette>
					<h1>Current color : {currentColor}</h1>

					<StyledColorsList>
						{colors?.map(item => {
							const bg = Math.floor(Math.random() * 16777215).toString(16)
							return (
								<StyledColor $bgItem={bg} onClick={() => handleChangeColor(item.color)} key={item.id}>
									{item.color}
								</StyledColor>
							)
						})}
					</StyledColorsList>
				</StyledColorPalette>
			</StyledBackgroundTheme>
		</div>
	)
}
