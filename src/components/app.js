import React, { Component } from 'react';

import SearchBar from './search_bar.js';
import SearchResults from './search_results.js';

export default class App extends Component {
  render() {
    return (
      <SearchBar />
      <SearchResults />
    );
  }
}
