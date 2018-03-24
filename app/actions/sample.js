export const SAMPLE_ACTION = "SAMPLE_ACTION";
export const REQUEST_SAMPLE_DATA = "REQUEST_SAMPLE_DATA";
export const RECEIVE_SAMPLE_DATA = "RECEIVE_SAMPLE_DATA";
export const ADD_TO_FAVORITES = "ADD_TO_FAVORITES";

export function sampleAction() {
	return {
		type : SAMPLE_ACTION,
		payload: {}
	}
}

export function requestSampleData() {
	return {
		type : REQUEST_SAMPLE_DATA,
		payload: {}
	}
}

export function receiveSampleData(data) {
	return {
		type : RECEIVE_SAMPLE_DATA,
		payload: {data}
	}
}

export function addToFavorites(movie) {
	return {
		type : ADD_TO_FAVORITES,
		movie
	}
}
