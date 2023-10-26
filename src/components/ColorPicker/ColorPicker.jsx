import React from 'react'
import { StyledBackgroundTheme, StyledColorPalette, StyledColor, StyledColorsList } from './ColorPicker.styled'
import { Test } from './Test'

export class ColorPicker extends React.PureComponent {
	state = {
		colors: this.props.colors,
		currentColor: 'white',
	}

	componentDidUpdate(prevProps, prevState) {
		console.log('Колір було змінено')
	}

	handleChangeColor = color => {
		this.setState({ currentColor: color })
	}
	render() {
		const { colors, currentColor } = this.state
		const title = 'test'
		const arr = Array(200).fill(' ')
		console.log('rerender')
		return (
			<div>
				<StyledBackgroundTheme $bg={currentColor}>
					<StyledColorPalette>
						<h1>Current color : {currentColor}</h1>

						<StyledColorsList>
							{colors?.map(item => {
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

				{arr.map((item, index) => (
					<Test key={index} title={title} />
				))}
			</div>
		)
	}
}
