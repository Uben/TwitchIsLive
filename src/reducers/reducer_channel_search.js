import { CHANNEL_SEARCH } from '../actions/index';

export default function (state = {}, action) {
	switch(action.type) {
		case CHANNEL_SEARCH:
			console.log(`Now in the "CHANNEL_SEARCH" reducer.`);
			console.log(action);
			return state;
	}

	return state;
}