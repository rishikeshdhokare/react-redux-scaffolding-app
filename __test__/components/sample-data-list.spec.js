import React from 'react'
import {shallow} from 'enzyme'
import SampleDataList from '../../app/components/SampleDataList'

describe('[Components] - Sample Data List', () => {

	test('should render correct section when no data is available', () => {

		const data = []
		const node = shallow(<SampleDataList data={data}/>)

		expect(node.find('.album').exists()).toEqual(true)
		expect(node.find('.samuel-jackson').exists()).toEqual(true)
	})

	test('should render correct section when data is available', () => {

		const data = [{foo: "bar"}, {baz: "test"}]
		const node = shallow(<SampleDataList data={data}/>)

		expect(node.find('.album').exists()).toEqual(true)
		expect(node.find('.row').children().length).toEqual(2)
	})

})
