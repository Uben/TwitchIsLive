import React, { Component } from 'react';
import { connect } from 'react-redux';


class TwitchStream extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		if (this.props.active_channel != null) {
			return (
				<div id="stream-info">
					<h1 id="view-title"> Are They Live? </h1>
					<p> Channel ID: { this.props.active_channel._id } </p>
					<p> Channel Name: { this.props.active_channel.display_name } </p>
					<p> { this.props.active_channel.status } </p>
					<p> Channel Created: { this.props.active_channel.created_at } </p>
					<p> Channel Follow Count: { this.props.active_channel.followers } </p>
					<p> Channel Game: { this.props.active_channel.game } </p>
					<p> Channel Language: { this.props.active_channel.language === 'en' ? "English Stream" : "Non English Stream" } </p>
					<p> { this.props.active_channel.mature ? "Mature 18+ Channel" : "Max PG13 Stream" } </p>
					<p> Channel View Count: { this.props.active_channel.views } </p>
					<a href={ this.props.active_channel.url } target="_blank"> Twitch Stream Link </a>
				</div>
			);
		} else {
			return (
				<div id="stream-info">
					<h1 id="view-title"> Are They Live? </h1>
					<p> Search for or select a channel to get started. </p>
				</div>
			);
		}
	}	
}

const mapStateToProps = (redux_state) => {
	return {
		active_channel: redux_state.active_channel,
	};
}

export default connect(mapStateToProps)(TwitchStream);