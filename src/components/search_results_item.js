import React, { Component } from 'react';

class SearchResultsItem extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<li className="search-results-item" key={this.props.key}>
				<div className="item-image-container">
					<img src={this.props.data.logo} />
				</div>
				<div className="item-meta">
					<p className="meta-name"> {this.props.data.display_name} </p>
					<p className="meta-status"> {this.props.data.status.length < 65 ? this.props.data.status : this.props.data.status.substring(0,60) + "..."} </p>
					<p className="meta-followers"> {this.props.data.followers} Followers </p>
				</div>
			</li>
		);
	}
}

export default SearchResultsItem;