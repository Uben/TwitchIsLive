import { combineReducers } from 'redux';
import ChannelSearch from './reducer_channel_search';
import InputChange from './reducer_handle_input_change';

const rootReducer = combineReducers({
  channel_search: ChannelSearch,
  search_value: InputChange,
});

export default rootReducer;
