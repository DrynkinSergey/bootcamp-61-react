import React, { Component } from 'react'

export default class AddUserForm extends Component {
	state = {
		name: '',
		email: '',
		skills: [],
		isOpenToWork: true,
		bio: '',
	}
	handleSubmit = e => {
		e.preventDefault()
		this.props.handleAddUser(this.state)
		console.log(this.state)
	}
	handleChangeInput = e => {
		const { target } = e
		const { name, value } = target
		if (name === 'skills') {
			return this.setState({ skills: [value] })
		}
		if (name === 'isOpenToWork') {
			return this.setState(prev => ({ isOpenToWork: !prev.isOpenToWork }))
		}
		this.setState({ [name]: value })
	}
	render() {
		const { name, email, bio, skills, isOpenToWork } = this.state
		return (
			<div>
				<form onSubmit={this.handleSubmit}>
					<input placeholder='Enter the name ' value={name} onChange={this.handleChangeInput} name='name' />
					<input
						placeholder='Enter the email '
						value={email}
						onChange={this.handleChangeInput}
						name='email'
						type='email'
					/>
					<input placeholder='Enter the bio ' value={bio} onChange={this.handleChangeInput} name='bio' />
					<select defaultValue='' onChange={this.handleChangeInput} name='skills'>
						<option disabled value=''>
							Choose your skill
						</option>
						<option value='react'>React</option>
						<option value='angular'>Angular</option>
						<option value='vue'>Vue</option>
					</select>
					<label>
						<input type='checkbox' onChange={this.handleChangeInput} checked={isOpenToWork} name='isOpenToWork' />
						IsOpenToWork
					</label>
					<button>Add user</button>
				</form>
			</div>
		)
	}
}
