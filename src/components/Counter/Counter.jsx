import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import { Flex, FlexContainer, StyledButton, StyledCounter } from './Counter.styled'
import { ChildComponent } from './ChildComponent'

export const Counter = () => {
	const [counter, setCounter] = useState(0)
	const [step, setStep] = useState(1)
	const [testValue, setTestValue] = useState(1)
	const calcSmt = value => {
		console.log('Calc start')
		for (let i = 1; i < 100_000_00; i++) {}
		console.log('Calc End')
		return 2 * value
	}

	const result = useMemo(() => calcSmt(testValue), [testValue])
	// const result = calcSmt(testValue)
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
	const testClick = useCallback(e => {
		return 2
	}, [])

	return (
		<>
			<FlexContainer>
				<button onClick={() => setTestValue(testValue + 1)}>{result}</button>
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
			<ChildComponent value={result} onClick={testClick} />
		</>
	)
}
