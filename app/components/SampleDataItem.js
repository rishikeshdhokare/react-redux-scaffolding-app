import React from 'react'

export default class SampleDataItem extends React.Component {
	constructor(props) {
		super(props)		
	}

	render() {
		return (
			<div className="col-md-4">
				<div className="card mb-4 box-shadow">
					<img className="card-img-top"
					     alt="" style={{height: "225px", width: "100%", display: "block"}}
					     src={this.props.movie.Poster}
					/>
					<div className="card-body">
						<p className="card-text">{this.props.movie.Title}</p>
						<p className="card-text">{this.props.movie.Year}</p>
						<p className="card-text">{this.props.movie.Type}</p>
						<div className="d-flex justify-content-between align-items-center">
							<div className="btn-group">
								<button type="button" className="btn btn-sm btn-outline-secondary" onClick={() => this.props.onBtnClick(this.props.movie)}>Add to Favorites</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		)
	}
}
