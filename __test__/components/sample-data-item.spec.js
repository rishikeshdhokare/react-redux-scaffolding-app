import React from 'react'
import {shallow} from 'enzyme'
import SampleDataItem from '../../app/components/SampleDataItem'

describe('[Components] - Sample Data Item', () => {
	let movie;

	beforeEach(() => {
    movie = {
      "Title": "X-Men: The Last Stand",
      "Year" : "2006",
      "Type" : "movie",
      "Poster": "https://images-eu.ssl-images-amazon.com/images/S/sgp-catalog-images/boxart_images/26730243-acb0-4c9c-bfe9-d6614f66c1ab-b276149f-44a4-463b-8c63-d8a5fef7e8f9_RGB_SD._UR300,400_FMJPG_.jpg"
    };
  })

	test('should render correctly', () => {
		const node = shallow(<SampleDataItem movie={movie}/>)
		expect(node.find('.col-md-4').exists()).toEqual(true)
	})

	test('should call handler on button click', () => {
    const mockCallback = jest.fn();

    const node = shallow(<SampleDataItem movie={movie} onBtnClick={mockCallback} />)

    node.find("button").simulate("click");
    expect(mockCallback.mock.calls.length).toBe(1);
  });
})
