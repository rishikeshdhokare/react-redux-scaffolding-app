import {connect} from "react-redux";
import { addToFavorites } from '../actions/sample';
import SampleDataItem from '../components/SampleDataItem';

const mapStateToProps = (state) => {
	return {
		data: state.sample.data
	}
}

const mapDispatchToProps = (dispatch, movie) => {
	return {
		onBtnClick : () => dispatch(addToFavorites(movie))
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(SampleDataItem)
