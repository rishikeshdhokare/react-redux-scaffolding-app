import * as sampleActions from '../../app/actions/sample'

describe('[Acions]', () => {
	test('"sampleAction" should return SAMPLE_ACTION', () => {
		const action = sampleActions.sampleAction()
		expect(action.type).toEqual(sampleActions.SAMPLE_ACTION)
		expect(action.payload).toEqual({})
	})

	test('"sampleAction" should return REQUEST_SAMPLE_DATA', () => {
		const action = sampleActions.requestSampleData()
		expect(action.type).toEqual(sampleActions.REQUEST_SAMPLE_DATA)
		expect(action.payload).toEqual({})
	})

	test('"sampleAction" should return RECEIVE_SAMPLE_DATA', () => {
		const data = [{foo: "bar"}, {baz: "test"}]
		const action = sampleActions.receiveSampleData(data)
		expect(action.type).toEqual(sampleActions.RECEIVE_SAMPLE_DATA)
		expect(action.payload).toEqual({data})
	})

	test('"sampleAction" should return ADD_TO_FAVORITES', () => {
		const movie = {foo: "bar"}
		const action = sampleActions.addToFavorites(movie)
		expect(action.type).toEqual(sampleActions.ADD_TO_FAVORITES)
		expect(action.movie).toEqual(movie)
	})
});
