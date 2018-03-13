import {receiveSampleData, requestSampleData, sampleAction} from '../../app/actions/sample'

describe('[Acions]', () => {

	test('"sampleAction" should return correct action object', () => {

		const action = sampleAction()
		expect(action.type).toEqual("SAMPLE_ACTION")
		expect(action.payload).toEqual({})
	})

	test('"sampleAction" should return correct action object', () => {

		const query  = "test"
		const action = requestSampleData()
		expect(action.type).toEqual("REQUEST_SAMPLE_DATA")
		expect(action.payload).toEqual({})
	})

	test('"sampleAction" should return correct action object', () => {

		const data   = [{foo: "bar"}, {baz: "test"}]
		const action = receiveSampleData(data)
		expect(action.type).toEqual("RECEIVE_SAMPLE_DATA")
		expect(action.payload).toEqual({data})
	})

});
