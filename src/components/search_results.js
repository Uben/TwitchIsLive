import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import SearchResultsItem from './search_results_item';

class SearchResults extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		if (this.props.channel_search != [] && this.props.channel_search != {} && this.props.channel_search != null){
			
			const SearchResultsList = this.props.channel_search.channels.map((channel) =>
				<SearchResultsItem key={channel._id} data={channel} />
			);

			return (
				<ul id="search-results" className="search-results">
					{SearchResultsList}
				</ul>
			);
		} else {
			return (
				<ul id="search-init" className="search-init">
					<p className="search-intro-message"> Start typing to begin </p>
				</ul>
			);
		}
	}
}




function mapStateToProps(redux_state) {
	return {
		channel_search: redux_state.channel_search,
	};
}

// function mapDispatchToProps(dispatch) {
// 	bindActionCreators({}, dispatch);
// }

export default connect(mapStateToProps, null)(SearchResults);

