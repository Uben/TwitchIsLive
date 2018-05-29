import React, { Component } from 'react';

import SearchBar from './search_bar';
import SearchResults from './search_results';
import TwitchStream from './twitch_stream';

class App extends Component {
	render() {
		return (
			<div className="inner">
				<div id="search" className="search-sidebar">
					<SearchBar />
					<SearchResults />
				</div>
				<TwitchStream />
			</div>
		);
	}
}

export default App;