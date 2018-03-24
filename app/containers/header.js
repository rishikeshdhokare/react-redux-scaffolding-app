import {connect} from "react-redux"
import Header from '../components/Header'

const mapStateToProps = (state) => {
	return {
		favorites: state.sample.favorites
	}
}

export default connect(mapStateToProps)(Header)
