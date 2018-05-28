import React, { Component } from 'react';

class SearchResultsItem extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<li className="search-results-item" key={this.props.key}>
				<div className="item-header">
					<img className="header-image" src={this.props.data.logo} />
					<p className="header-name"> {this.props.data.display_name} </p>
				</div>
				<div className="item-meta">
					<p classNme="meta-status"> {this.props.data.status} </p>
					<p classNme="meta-followers"> {this.props.data.followers} </p>
					<p classNme="meta-created-at"> Joined {this.props.data.created_at} </p>
				</div>
			</li>
		);
	}
}

export default SearchResultsItem;