import React, { useCallback, useEffect, useMemo, useReducer, useRef, useState } from 'react'
import { Flex, FlexContainer, StyledButton, StyledCounter } from './Counter.styled'
import { ChildComponent } from './ChildComponent'

export const Counter = () => {
	const inititalState = {
		counter: 0,
		step: 1,
		test: 1,
	}

	const counterReducer = (state, action) => {
		console.log(action)

		// {type, payload}
		switch (action.type) {
			case 'plus': {
				return {
					...state,
					counter: state.counter + 1,
				}
			}
			case 'decrement':
				return {
					...state,
					counter: state.counter - 1,
				}
			case 'reset':
				return {
					...state,
					counter: 0,
					step: 1,
				}
			case 'changeStep':
				return {
					...state,
					step: action.payload,
				}

			default:
				return state
		}
	}
	const [state, dispatch] = useReducer(counterReducer, inititalState)
	const { counter, step } = state
	const [testValue, setTestValue] = useState(1)
	const calcSmt = value => {
		console.log('Calc start')
		for (let i = 1; i < 100_000_00; i++) {}
		console.log('Calc End')
		return 2 * value
	}

	const result = useMemo(() => calcSmt(testValue), [testValue])
	// const result = calcSmt(testValue)

	const handleDecrement = () => {
		if (counter !== 0) {
			// setCounter(prevState => prevState - step)
			dispatch({ type: 'decrement' })
		}
	}
	const handleReset = () => {
		dispatch({ type: 'reset' })
		// setCounter(0)
		// setStep(1)
	}
	const handleChangeStep = e => {
		dispatch({ type: 'changeStep', payload: +e.target.value })
		// setStep(+e.target.value)
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
						<StyledButton onClick={() => dispatch({ type: 'plus' })}>plus</StyledButton>
					</Flex>
				</StyledCounter>
			</FlexContainer>
			<ChildComponent value={result} onClick={testClick} />
		</>
	)
}
