import React, { useEffect, useRef, useState } from 'react'
import { Flex, FlexContainer, StyledButton, StyledCounter } from './Counter.styled'

export const Counter = () => {
	const [counter, setCounter] = useState(0)
	const [step, setStep] = useState(1)

	const handleIncrement = () => {
		setCounter(prevState => prevState + step)
	}
	const handleDecrement = () => {
		if (counter !== 0) {
			setCounter(prevState => prevState - step)
		}
	}
	const handleReset = () => {
		setCounter(0)
		setStep(1)
	}
	const handleChangeStep = e => {
		setStep(+e.target.value)
	}

	return (
		<FlexContainer>
			<StyledCounter>
				<input value={step} onChange={handleChangeStep} type='number' placeholder='change step' />
				<h1>{counter}</h1>
				<Flex>
					<StyledButton onClick={handleDecrement}>minus</StyledButton>
					<StyledButton onClick={handleReset}>reset</StyledButton>
					<StyledButton onClick={handleIncrement}>plus</StyledButton>
				</Flex>
			</StyledCounter>
		</FlexContainer>
	)
}
