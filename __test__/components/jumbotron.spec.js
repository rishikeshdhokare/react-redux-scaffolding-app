import React from 'react'
import {shallow} from 'enzyme'
import Jumbotron from '../../app/components/Jumbotron'

describe('[Components] - Jumbotron', () => {
	test('should render correctly', () => {
		const node = shallow(<Jumbotron/>)
		expect(node.find('.jumbotron').exists()).toEqual(true)
	})

	test('should call handler on sampleButton click', () => {
		const mockCallback = jest.fn();
	
		const node = shallow(<Jumbotron onSampleBtnClick={mockCallback} />)
	
		node.find("#sampleButton").simulate("click");
		expect(mockCallback.mock.calls.length).toBe(1);
	});

	test('should call handler on getDataButton click', () => {
		const mockCallback = jest.fn();
	
		const node = shallow(<Jumbotron onGetSampleBtnClick={mockCallback} />)
	
		node.find("#getDataButton").simulate("click");
		expect(mockCallback.mock.calls.length).toBe(1);
	});
})
