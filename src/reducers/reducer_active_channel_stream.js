import { GET_CHANNEL_STREAM, SET_CHANNEL_STREAM } from '../actions/index';

export default function (state = null, action) {
	switch(action.type) {
		case SET_CHANNEL_STREAM:
			console.log(action);
			return action.payload;

		case GET_CHANNEL_STREAM:
			return state;
	}

	return state;
}