import {Cmd, loop} from 'redux-loop'
import {RECEIVE_SAMPLE_DATA, receiveSampleData, REQUEST_SAMPLE_DATA, SAMPLE_ACTION, ADD_TO_FAVORITES} from '../actions/sample'
import {fetchSampleData} from '../effects/sample'
import {getRandomCompanyName} from '../utils/index'

export default (state = {name: null, data: [], favorites: []}, action) => {

	switch (action.type) {
		case SAMPLE_ACTION:
			return {
				...state,
				name: getRandomCompanyName()
			}

		case REQUEST_SAMPLE_DATA:
			return loop(
				state,
				Cmd.run(fetchSampleData, {
					args                : [],
					successActionCreator: receiveSampleData,
					failActionCreator   : console.log
				})
			)

		case RECEIVE_SAMPLE_DATA:
			return {
				...state,
				data: action.payload.data.Search
			}

		case ADD_TO_FAVORITES: 
			return {
				...state,
				favorites: [...state.favorites, action.movie]
			}
		default:
			return state
	}
}
