import React from 'react'
import {Link} from 'react-router-dom'
import FavoriteMovies from '../containers/favoriteMovies'

const SamplePage2 = () =>
	<div className="sample-page-2">
		<div className="container">
			<h2 className="mt-5 text-center">
				Favorite Movies
			</h2>
			<FavoriteMovies />
		</div>
	</div>

export default SamplePage2
