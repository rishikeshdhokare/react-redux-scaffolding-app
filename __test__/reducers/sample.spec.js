import {Cmd, loop} from 'redux-loop'
import sampleReducer from '../../app/reducers/sample'
import {RECEIVE_SAMPLE_DATA, receiveSampleData, REQUEST_SAMPLE_DATA, SAMPLE_ACTION} from '../../app/actions/sample'
import {companies} from '../../app/utils/index'
import {fetchSampleData} from '../../app/effects/sample'

describe('[Reducers] - Sample', () => {

	test('should return initial state if no action matches any case in the reducer', () => {

		const action = {
			type   : '',
			payload: {}
		}

		const state         = undefined
		const newState      = sampleReducer(state, action)
		const expectedState = {name: null, favorites: [], data: []}

		expect(newState).toEqual(expectedState)
	})

	test('should handle "SAMPLE_ACTION" action type and return correct state', () => {

		const action = {
			type   : SAMPLE_ACTION,
			payload: {}
		}

		const state    = undefined
		const newState = sampleReducer(state, action)

		expect(newState.data).toEqual([])
		expect(companies).toContain(newState.name)

	})

	test('should "REQUEST_SAMPLE_DATA" action type and return correct state', () => {

		const action = {
			type   : REQUEST_SAMPLE_DATA,
			payload: {}
		}

		const state         = {name: null, data: []}
		const newState      = sampleReducer(state, action)
		const expectedState = loop(
			state,
			Cmd.run(fetchSampleData, {
				args                : [],
				successActionCreator: receiveSampleData,
				failActionCreator   : console.log
			})
		)

		expect(newState).toEqual(expectedState)
	})

	test('should "RECEIVE_SAMPLE_DATA" action type and return correct state', () => {

		const data = {Search: [{foo: 'bar'}, {baz: 'test'}]}

		const action = {
			type   : RECEIVE_SAMPLE_DATA,
			payload: {data}
		}

		const state         = {name: null, data: []}
		const newState      = sampleReducer(state, action)
		const expectedState = {name: null, data: data.Search}
		
		expect(newState).toEqual(expectedState)
	})
})
