import {connect} from "react-redux";
import FavoriteMovies from '../components/FavoriteMovies';

const mapStateToProps = (state) => {
	return {
		favorites: state.sample.favorites
	}
}

export default connect(mapStateToProps)(FavoriteMovies)
