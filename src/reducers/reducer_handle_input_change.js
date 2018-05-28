import { FORM_INPUT_CHANGE } from '../actions/index';

export default function(state = null, action) {
	switch(action.type) {
		case FORM_INPUT_CHANGE:
			console.log(`Now in the "FORM_INPUT_CHANGE" reducer.`);
			console.log(action);
			return action.payload;
	}

	return state;
}