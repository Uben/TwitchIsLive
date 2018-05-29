import axios from 'axios';

export const TWITCH_API_CLIENT_ID = 'xchln1xzkrgiuw9yn1bojpe7vom10v';

export const FORM_INPUT_CHANGE = 'FORM_INPUT_CHANGE';
export const CHANNEL_SEARCH = 'CHANNEL_SEARCH';
export const CHANNEL_SEARCH_RESPONSE = 'CHANNEL_SEARCH_RESPONSE';
export const SET_ACTIVE_CHANNEL = 'SET_ACTIVE_CHANNEL';


export function channel_search(form_value) {
	console.log(`In the 'CHANNEL_SEARCH' action creator passing in the value: ${form_value}.`);
	
	// build the url
	const API_URL = 'https://api.twitch.tv/kraken';
	const kraken_api_url = encodeURI(`${API_URL}/search/channels?query=${form_value}&client_id=${TWITCH_API_CLIENT_ID}`);

	// redux-thunk to handle an async ajax request
	return (dispatch) => {
        axios.get(kraken_api_url)
            .then((response) => {
                if (response.status !== 200) { throw Error(response.statusText); }

                return response;
            })
            .then((response) => dispatch(channel_search_response(response)));
    };
}



export function channel_search_response(response){
	console.log(`In the 'CHANNEL_SEARCH_RESPONSE' action creator.`);

	return {
		type: CHANNEL_SEARCH_RESPONSE,
		payload: response.data,
	};
}



export function form_input_change(form_value) {
	console.log(`In the 'FORM_INPUT_CHANGE' action creator passing in the value: ${form_value}.`);

	return {
		type: FORM_INPUT_CHANGE,
		payload: form_value,
	}
}



export const set_active_channel = (channel) => {
	console.log(`In the 'SET_ACTIVE_CHANNEL' action creator for the channel: ${channel.name}.`);

	return {
		type: SET_ACTIVE_CHANNEL,
		payload: channel,
	}
}































