import { combineReducers } from 'redux';
import UserSearch from './reducer_user_search.js';
import InputChange from './reducer_handle_input_change.js';

const rootReducer = combineReducers({
  user_search: UserSearch,
  search_value: InputChange,
});

export default rootReducer;
