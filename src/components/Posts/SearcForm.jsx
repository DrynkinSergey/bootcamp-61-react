import React, { Component } from 'react'

export class SearcForm extends Component {
	state = {
		searchStr: '',
	}
	handleSubmit = e => {
		e.preventDefault()
		this.setState({ searchStr: '' })
	}
	render() {
		return (
			<form onSubmit={this.handleSubmit}>
				<input
					type='search'
					onChange={e => this.setState({ searchStr: e.target.value })}
					value={this.state.searchStr}
				/>
				<button>Search</button>
			</form>
		)
	}
}
