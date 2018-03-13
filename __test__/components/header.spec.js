import React from 'react'
import {shallow} from 'enzyme'
import Header from '../../app/components/Header'

describe('[Components] - Header', () => {

	test('should render correctly', () => {

		const node = shallow(<Header/>)
		expect(node.find('.navbar').exists()).toEqual(true)
	})

})
