// import TwitchHelix as Helix from 'twitch-helix'; // export const twitchApi = new TwitchHelix({ clientId: client_id, clientSecret: client_secret })
import _ from 'lodash';
import axios from 'axios';

export const client_id = 'xchln1xzkrgiuw9yn1bojpe7vom10v';
export const client_secret = 'xgxvubwzr3tijg01gig7i4w6ci5r7a'; // before you start: I KNOW. This will change if I decide to actually push this live & will go in env variables.

export const CHANNEL_SEARCH = 'CHANNEL_SEARCH';
export const CHANNEL_SEARCH_RESPONSE = 'CHANNEL_SEARCH_RESPONSE';
export const FORM_INPUT_CHANGE = 'FORM_INPUT_CHANGE';


export function channel_search(form_value) {
	console.log(`In the 'CHANNEL_SEARCH' action creator passing in the value: ${form_value}.`);
	
	// build the url
	const API_URL = 'https://api.twitch.tv/kraken';
	const kraken_api_url = encodeURI(`${API_URL}/search/channels?query=${form_value}&client_id=${client_id}`);

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