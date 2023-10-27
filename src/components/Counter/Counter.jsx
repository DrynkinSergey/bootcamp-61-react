import React, { useEffect, useRef, useState } from 'react'
import { Flex, FlexContainer, StyledButton, StyledCounter } from './Counter.styled'
import { toast } from 'react-toastify'

export const Counter = () => {
	const [counter, setCounter] = useState(0)
	const [step, setStep] = useState(1)
	const firstRender = useRef(true)
	const inputRef = useRef(null)
	const buttonRef = useRef(null)
	useEffect(() => {
		console.log(inputRef.current)
		inputRef.current.focus()
		setTimeout(() => {
			buttonRef.current.click()
		}, 2000)
		firstRender.current || console.log('Лічильник змонтувався, лише 1 раз йде виконання')
	}, [])

	useEffect(() => {
		firstRender.current || console.log('Крок було змінено')
	}, [step])

	useEffect(() => {
		if (firstRender.current === true) {
			toast.error('Це був перший рендер! Далі він не повториться!')
			firstRender.current = false
			return
		}
		console.log('Було змінено  лічильник')
	}, [counter, step])

	useEffect(() => {
		if (counter > 10) {
			inputRef.current.style.border = '2px solid red'
			console.log('Counter > 10')
		}
		if (step === 5) {
			setStep(1)
		}
	}, [counter, step])
	console.log('Render')

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
				<input ref={inputRef} value={step} onChange={handleChangeStep} type='number' placeholder='change step' />
				<h1>{counter}</h1>
				<Flex>
					<StyledButton onClick={handleDecrement}>minus</StyledButton>
					<StyledButton onClick={handleReset}>reset</StyledButton>
					<StyledButton onClick={handleIncrement} ref={buttonRef}>
						plus
					</StyledButton>
				</Flex>
			</StyledCounter>
		</FlexContainer>
	)
}
