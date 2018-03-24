import {connect} from "react-redux";
import {requestSampleData, sampleAction} from '../actions/sample';
import Jumbotron from '../components/Jumbotron';

const mapStateToProps = (state) => {
	return {
		name: state.sample.name
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		onSampleBtnClick   : () => dispatch(sampleAction()),
		onGetSampleBtnClick: () => dispatch(requestSampleData())
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Jumbotron)
