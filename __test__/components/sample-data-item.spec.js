import React from 'react'
import {shallow} from 'enzyme'
import SampleDataItem from '../../app/components/SampleDataItem'

describe('[Components] - Sample Data Item', () => {

	test('should render correctly', () => {

		const node = shallow(<SampleDataItem/>)
		expect(node.find('.col-md-4').exists()).toEqual(true)
	})

})
