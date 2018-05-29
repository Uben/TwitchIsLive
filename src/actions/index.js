import axios from 'axios';

const TWITCH_API_CLIENT_ID = 'xchln1xzkrgiuw9yn1bojpe7vom10v';
const TWITCH_KRAKEN_API_URL = 'https://api.twitch.tv/kraken';

export const FORM_INPUT_CHANGE = 'FORM_INPUT_CHANGE';
export const CHANNEL_SEARCH = 'CHANNEL_SEARCH';
export const CHANNEL_SEARCH_RESPONSE = 'CHANNEL_SEARCH_RESPONSE';
export const SET_ACTIVE_CHANNEL = 'SET_ACTIVE_CHANNEL';
export const GET_CHANNEL_STREAM = 'GET_CHANNEL_STREAM';
export const SET_CHANNEL_STREAM = 'SET_CHANNEL_STREAM';


export const channel_search = (form_value) => {
	console.log(`In the 'CHANNEL_SEARCH' action creator passing in the value: ${form_value}.`);
	
	// build the url
	const kraken_api_url = window.encodeURI(`${TWITCH_KRAKEN_API_URL}/search/channels?query=${form_value}&client_id=${TWITCH_API_CLIENT_ID}&api_version=5`);

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


export const channel_search_response = (response) => {
	console.log(`In the 'CHANNEL_SEARCH_RESPONSE' action creator.`);

	return {
		type: CHANNEL_SEARCH_RESPONSE,
		payload: response.data
	};
}


export const form_input_change = (form_value) => {
	console.log(`In the 'FORM_INPUT_CHANGE' action creator.`);

	return {
		type: FORM_INPUT_CHANGE,
		payload: form_value
	}
}


export const set_active_channel = (channel) => {
	console.log(`In the 'SET_ACTIVE_CHANNEL' action creator for the channel: ${channel.name}.`);

	return {
		type: SET_ACTIVE_CHANNEL,
		payload: channel
	}
}


export const get_channel_stream = (channel_id) => {
	console.log(`In the 'GET_CHANNEL_STREAM' action creator.`);
	const kraken_api_url = window.encodeURI(`${TWITCH_KRAKEN_API_URL}/streams/${channel_id}?client_id=${TWITCH_API_CLIENT_ID}&api_version=5&stream_type=live`);

	// redux-thunk to handle an async ajax request
	return (dispatch) => {
        axios.get(kraken_api_url)
            .then((response) => {
                if (response.status !== 200) { throw Error(response.statusText); }

                return response;
            })
            .then((response) => dispatch(set_channel_stream(response)));
    };
}


export const set_channel_stream = (response) => {
	console.log(`In the 'SET_CHANNEL_STREAM' action creator.`);
	
	return {
		type: SET_CHANNEL_STREAM,
		payload: (response.data.stream != null) ? response : null // response.data.stream is null when a channel isnt streaming so we set it as null
	}
}





























