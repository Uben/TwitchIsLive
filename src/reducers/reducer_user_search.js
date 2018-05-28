import { TWITCH_USER_SEARCH } from '../actions/index';

export default function (state = {}, action) {
	switch(action.type) {
		case TWITCH_USER_SEARCH:
			console.log(`Now in the "TWITCH_USER_SEARCH" reducer.`);
			console.log(action);
			return state;
	}

	return state;
}