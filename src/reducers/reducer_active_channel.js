import { SET_ACTIVE_CHANNEL } from '../actions/index';

export default function(state = null, action) {
	switch(action.type) {
		case SET_ACTIVE_CHANNEL:
			console.log(action);
			return action.payload;
	}

	return state;
}