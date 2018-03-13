jest.unmock('../../app/effects/sample')

import {fetchSampleData} from '../../app/effects/sample'


describe('[Effects]', () => {

	test('"fetchSampleData" should return jsonResponse', () => {

		const data = {Search: [{foo: 'bar'}]}

		window.fetch = jest.fn()
		.mockImplementation(() =>
			Promise.resolve(window.mockResponse(200, null, JSON.stringify(data))))

		return fetchSampleData()
		.then(res => {
			expect(res).toEqual(data)
		})
	})

})
