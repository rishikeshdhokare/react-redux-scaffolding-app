import React from 'react'
import {shallow} from 'enzyme'
import FavoriteMovies from '../../app/components/FavoriteMovies'

describe('[Components] - FavoriteMovies', () => {
	test('should render correct section when no data is available', () => {
		const favoriteMovies = [{movie: {
            "Title": "The Last King of Scotland",
            "Year" : "2006",
            "Type" : "movie",
            "Poster": "https://images-eu.ssl-images-amazon.com/images/S/sgp-catalog-images/boxart_images/884755c4-20d0-4546-ae3e-359233c01367-33e8fb03-6d66-4dcd-be80-0697f80a472a_RGB_SD._UR300,400_FMJPG_.jpg"
        }}]
		const node = shallow(<FavoriteMovies favorites={favoriteMovies}/>)
		expect(node.find('.row').exists()).toEqual(true)
	})
})
