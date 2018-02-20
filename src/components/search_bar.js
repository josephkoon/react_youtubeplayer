import React, { Component } from 'react'

class SearchBar extends Component {

	constructor(props){
		super(props)
		this.state = { term : 'starting value' }
	}


	//change search term
	onInputChange(term){
		this.setState({term})
		this.props.onSearchTermChange(term);
	}

	render(){
		return (
		<div>
			<input className='form-control search-bar'
			value = {this.state.term}
			onChange={event => this.onInputChange(event.target.value)} />
		</div>
		)
	}


}

export default SearchBar