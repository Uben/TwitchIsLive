

export const TWITCH_USER_SEARCH = 'TWITCH_USER_SEARCH';
export const FORM_INPUT_CHANGE = 'FORM_INPUT_CHANGE';


export function user_search(form_value) {
	console.log(`In the 'TWITCH_USER_SEARCH' action creator passing in the value: ${form_value}.`);

	return {
		type: TWITCH_USER_SEARCH,
		payload: form_value,
	}
}

export function user_input_change(form_value) {
	console.log(`In the 'TWITCH_USER_SEARCH' action creator passing in the value: ${form_value}.`);

	return {
		type: FORM_INPUT_CHANGE,
		payload: form_value,
	}
}