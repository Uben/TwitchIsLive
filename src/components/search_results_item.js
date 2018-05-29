import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { set_active_channel } from '../actions/index';

class SearchResultsItem extends Component {
	constructor(props) {
		super(props);

		this.setActiveClick = this.setActiveClick.bind(this);
	}

	setActiveClick(event) {
		this.props.set_active_channel(this.props.data);
	}

	render() {
		return (
			<li className="search-results-item" key={this.props.key} onClick={this.setActiveClick}>
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

function mapDispatchToProps(dispatch) {
	return bindActionCreators({ set_active_channel: set_active_channel }, dispatch);
}

export default connect(null, mapDispatchToProps)(SearchResultsItem);








