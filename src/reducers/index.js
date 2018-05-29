import { combineReducers } from 'redux';

import InputChange from './reducer_handle_input_change';
import ChannelSearch from './reducer_channel_search';
import ActiveChannel from './reducer_active_channel';

const rootReducer = combineReducers({
	search_value: InputChange,
	channel_search: ChannelSearch,
	active_channel: ActiveChannel,
});

export default rootReducer;
