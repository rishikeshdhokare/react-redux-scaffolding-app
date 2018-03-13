import React from 'react'
import {connect} from "react-redux"
import FavoriteMovies from '../components/FavoriteMovies'

// This is a container

export const mapStateToProps = (state) => {
	return {
		favorites: state.sample.favorites
	}
}

export default connect(mapStateToProps)(FavoriteMovies)
