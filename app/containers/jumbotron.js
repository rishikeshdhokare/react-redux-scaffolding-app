import React from 'react'
import {connect} from "react-redux"
import {requestSampleData, sampleAction} from '../actions/sample'
import Jumbotron from '../components/Jumbotron'


export const mapStateToProps = (state) => {
	return {
		name: state.sample.name
	}
}

export const mapDispatchToProps = (dispatch) => {
	return {
		onSampleBtnClick   : () => dispatch(sampleAction()),
		onGetSampleBtnClick: () => dispatch(requestSampleData())
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Jumbotron)
