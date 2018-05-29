import { CHANNEL_SEARCH, CHANNEL_SEARCH_RESPONSE } from '../actions/index';

export default function (state = null, action) {
	switch(action.type) {
		case CHANNEL_SEARCH_RESPONSE:
			return action.payload;

		case CHANNEL_SEARCH:
			return state;
	}

	return state;
}