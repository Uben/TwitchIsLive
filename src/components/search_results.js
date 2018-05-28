import React, { Component } form 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

class SearchResults extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div id="SearchResults" className="search-results">
				<p> Setting up search results </p>
			</div>
		);
	}
}

mapStateToProps(redux_state) {
	return {

	};
}

mapDispatchToProps(dispatch) {
	bindActionCreators({}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchResults);

