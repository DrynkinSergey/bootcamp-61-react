import React from 'react'
import { Flex, FlexContainer, StyledButton, StyledCounter } from './Counter.styled'

export class Counter extends React.Component {
	state = {
		counter: 0,
		step: 1,
		//Може мати бьдь яку кількість властивостей
		user: 'Alex',
		amount: 12000,
		info: {
			address: 'Kyiv',
			country: 'Ukraine',
		},
	}

	handleIncrement = () => {
		// this.state.counter += 1
		// this.setState({ counter: this.state.counter + 1 })
		// this.setState({ counter: this.state.counter + 1 })
		// this.setState({ counter: this.state.counter + 1 })

		this.setState(prevState => ({ counter: prevState.counter + prevState.step }))
	}
	handleDecrement = () => {
		if (this.state.counter !== 0) {
			// this.setState({ counter: this.state.counter - 1 })
			this.setState(prev => ({ counter: prev.counter - prev.step }))
		}
	}
	handleReset = () => {
		this.setState({ counter: 0, step: 1 })
	}
	handleChangeStep = e => {
		this.setState({ step: +e.target.value })
	}

	render() {
		console.log('render')
		return (
			<FlexContainer>
				<StyledCounter>
					<input value={this.state.step} onChange={this.handleChangeStep} type='number' placeholder='change step' />
					<h1>{this.state.counter}</h1>
					<Flex>
						<StyledButton onClick={this.handleDecrement}>minus</StyledButton>
						<StyledButton onClick={this.handleReset}>reset</StyledButton>
						<StyledButton onClick={this.handleIncrement}>plus</StyledButton>
					</Flex>
				</StyledCounter>
			</FlexContainer>
		)
	}
}

// export const Counter = () => {
// 	const handleClear = e => {
// 		console.log(e)
// 	}

// 	return (
// 		<FlexContainer>
// 			<StyledCounter>
// 				<h1>{0}</h1>
// 				<Flex>
// 					<StyledButton onClick={() => alert('Minus')}>minus</StyledButton>
// 					<StyledButton onClick={handleClear}>reset</StyledButton>
// 					<StyledButton onClick={() => console.log('hello')}>plus</StyledButton>
// 				</Flex>
// 			</StyledCounter>
// 		</FlexContainer>
// 	)
// }
