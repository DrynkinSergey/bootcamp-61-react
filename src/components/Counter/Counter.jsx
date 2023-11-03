import { useDispatch, useSelector } from 'react-redux'
import { Flex, FlexContainer, StyledButton, StyledCounter } from './Counter.styled'
import { MINUS, PLUS, RESET } from '../../redux/counter/constants'
export const Counter = () => {
	const counter = useSelector(state => state.counter)
	const step = useSelector(state => state.step)
	const dispatch = useDispatch()

	const handlePlus = () => {
		dispatch({ type: PLUS })
	}
	const handleMinus = () => {
		dispatch({ type: MINUS })
	}
	const handleReset = () => {
		dispatch({ type: RESET })
	}

	return (
		<FlexContainer>
			<StyledCounter>
				<h1>{counter}</h1>

				<input type='text' value={step} />
				<Flex>
					<StyledButton onClick={handleMinus}>minus</StyledButton>
					<StyledButton onClick={handleReset}>reset</StyledButton>
					<StyledButton onClick={handlePlus}>plus</StyledButton>
				</Flex>
			</StyledCounter>
		</FlexContainer>
	)
}
