import { FlexContainer, StyledButton } from '../Counter/Counter.styled'
import { StyledInput, StyledLabel, StyledLoginForm, StyledTitle } from './RegisterForm.styled'

export const RegisterForm = () => {
	return (
		<FlexContainer>
			<StyledLoginForm>
				<StyledTitle>Register</StyledTitle>
				<StyledLabel>
					Name:
					<StyledInput />
				</StyledLabel>
				<br />
				<StyledLabel>
					Email:
					<StyledInput />
				</StyledLabel>
				<br />
				<StyledLabel>
					Password:
					<StyledInput />
				</StyledLabel>
				<br />

				<br />
				<StyledLabel>
					Country:
					<select>
						<option value='ukraine'>Ukraine</option>
						<option value='usa'>USA</option>
						<option value='canada'>Canada</option>
					</select>
				</StyledLabel>
				<br />
				<StyledButton>Register</StyledButton>
			</StyledLoginForm>
		</FlexContainer>
	)
}
