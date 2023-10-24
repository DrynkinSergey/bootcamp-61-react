import React from 'react'
import { Flex, FlexContainer, StyledButton, StyledCounter } from './Counter.styled'
import { toast } from 'react-toastify'

export class Counter extends React.Component {
	state = {
		counter: 0,
		step: 1,
	}
	componentDidMount() {
		console.log('Mount')
		toast.success('Comonent was mount')
	}

	componentDidUpdate(_, prevState) {
		console.log('Update')
		// console.log(prevProps)
		// console.log(prevState)
		if (prevState.counter !== this.state.counter) {
			// toast.info('Comonent was updated')
		}
		if (prevState.step !== this.state.step) {
			toast.info('Step was updated')
		}
		if (this.state.counter === 5) {
			toast.warning('Please stop!')
		}
	}

	handleIncrement = () => {
		this.setState(prevState => ({ counter: prevState.counter + prevState.step }))
	}
	handleDecrement = () => {
		if (this.state.counter !== 0) {
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
