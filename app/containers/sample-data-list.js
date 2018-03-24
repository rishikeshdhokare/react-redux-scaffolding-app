import {connect} from "react-redux";
import SampleDataList from '../components/SampleDataList';

const mapStateToProps = (state) => {
	return {
		data: state.sample.data
	}
}

export default connect(mapStateToProps)(SampleDataList)
