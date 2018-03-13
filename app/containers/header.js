import React from 'react'
import {connect} from "react-redux"
import Header from '../components/Header'

// This is a container

export const mapStateToProps = (state) => {
	return {
		favorites: state.sample.favorites
	}
}

export default connect(mapStateToProps)(Header)
