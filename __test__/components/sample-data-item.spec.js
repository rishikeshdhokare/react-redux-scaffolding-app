import React from 'react'
import {shallow} from 'enzyme'
import SampleDataItem from '../../app/components/SampleDataItem'

describe('[Components] - Sample Data Item', () => {
	test('should render correctly', () => {
		const movie = {
			"Title": "The Last King of Scotland",
			"Year" : "2006",
			"Type" : "movie",
			"Poster": "https://images-eu.ssl-images-amazon.com/images/S/sgp-catalog-images/boxart_images/884755c4-20d0-4546-ae3e-359233c01367-33e8fb03-6d66-4dcd-be80-0697f80a472a_RGB_SD._UR300,400_FMJPG_.jpg"
		  }
		const node = shallow(<SampleDataItem movie={movie}/>)
		expect(node.find('.col-md-4').exists()).toEqual(true)
	})
})
