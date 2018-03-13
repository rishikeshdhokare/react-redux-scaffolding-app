import React from 'react'

import SampleDataItem from '../containers/sample-data-item';

export default class FavoriteMovies extends React.Component {
	constructor(props) {
		super(props)	
	}

	renderMovie = (data, index) => {
		return (
			<div className="col-md-4" key={index}>
				<div className="card mb-4 box-shadow">
					<img className="card-img-top"
					     alt="" style={{height: "225px", width: "100%", display: "block"}}
					     src={data.movie.Poster}
					/>
					<div className="card-body">
						<p className="card-text">{data.movie.Title}</p>
						<p className="card-text">{data.movie.Year}</p>
						<p className="card-text">{data.movie.Type}</p>
					</div>
				</div>
			</div>
		)
	}

	render() {
		return (
			<div className="album py-5">
				<div className="container">
					<div className="row">
						{
							this.props.favorites.map((movie, index) => this.renderMovie(movie, index))
						}
					</div>
				</div>
			</div>
		)
	}
}
