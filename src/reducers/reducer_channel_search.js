import { CHANNEL_SEARCH, CHANNEL_SEARCH_RESPONSE } from '../actions/index';

export default function (state = null, action) {
	switch(action.type) {
		case CHANNEL_SEARCH_RESPONSE:
			console.log(`Now in the "CHANNEL_SEARCH_RESPONSE" reducer.`);
			return action.payload;

		case CHANNEL_SEARCH:
			console.log(`Now in the "CHANNEL_SEARCH" reducer.`);
			return state;
	}

	return state;
}