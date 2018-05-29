import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { channel_search, form_input_change } from '../actions/index';


class SearchBar extends Component {
	constructor(props) {
		super(props);

		this.handleFormSubmit = this.handleFormSubmit.bind(this);
		this.handleInputChange = this.handleInputChange.bind(this);
		this.handleButtonClick = this.handleButtonClick.bind(this);
	}


	// Prevents the default Browser form submission behavior
	handleFormSubmit(event) {
		event.preventDefault();
	}


	// update the 'search_value' in the redux state
	handleInputChange(event) {
		this.props.form_input_change(event.target.value);
	}


	handleButtonClick(event){
		event.preventDefault(); // Prevents the default Browser form submission behavior
		this.props.channel_search(this.props.search_value); // Dispatch the action 'user_search/FORM_INPUT_CHANGE' w/ value in the input 
	}


	render () {
		return (
			<form id="search-form" className="search-form" onSubmit={this.handleFormSubmit}>
				<input
					type="text"
					placeholder="enter a username"
					value={this.props.search_value != null ? this.props.search_value : ''} // Value shouldn't be null
					onChange={this.handleInputChange}
				/>
				<button onClick={this.handleButtonClick}> Search </button>
			</form>
		);
	}
}


const mapStateToProps = (redux_state) => {
	// the key in the object is what will be used to access the redux store state
	// we assign the associated value as the data in the store we want to assign to the key as its value

	return {
		search_value: redux_state.search_value,
	};
}


const mapDispatchToProps = (dispatch) =>  {
	// this takes the action and sets it in the props( e.g 'this.props')
	// which when called, dispatches an action that changes the state of the application
	
	// in user_search: user_search, the key is what you type to access the action
	// the value is a refrerence to a JS function to which we pass the todo object
	return bindActionCreators({ channel_search: channel_search, form_input_change: form_input_change }, dispatch);
}


export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);