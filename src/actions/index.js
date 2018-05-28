// import TwitchHelix as Helix from 'twitch-helix'; // export const twitchApi = new TwitchHelix({ clientId: client_id, clientSecret: client_secret })
import axios from 'axios';

export const client_id = 'xchln1xzkrgiuw9yn1bojpe7vom10v';
export const client_secret = 'xgxvubwzr3tijg01gig7i4w6ci5r7a'; // before you start: I KNOW. This will change if I decide to actually push this live & will go in env variables.

export const CHANNEL_SEARCH = 'CHANNEL_SEARCH';
export const FORM_INPUT_CHANGE = 'FORM_INPUT_CHANGE';


export function user_search(form_value) {
	console.log(`In the 'TWITCH_USER_SEARCH' action creator passing in the value: ${form_value}.`);
	
	const API_URL = 'https://api.twitch.tv/kraken';
	const kraken_api_url = encodeURI(`${API_URL}/search/channels?client_id=${client_id}&query=${form_value}`);
	
	axios.get(kraken_api_url).then((response) => { console.log(response.data.channels); });

	return {
		type: CHANNEL_SEARCH,
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