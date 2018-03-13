import React from 'react'
import {Link} from 'react-router-dom'


export default class Header extends React.Component {
	constructor(props) {
		super(props)
		console.log("props..", props);
		
	}

	render() {
		return (
			<header className="navbar navbar-dark bg-dark box-shadow fixed-top">
				<div className="container d-flex justify-content-between">
					<Link to="/" className="navbar-brand d-flex align-items-center">
						<strong>Sample App</strong>
					</Link>
					<ul className="navbar-nav mr-auto">
						<li className="nav-item">
							<Link to="/sample-page-2" className="nav-link">
								Favorites {this.props.favorites.length}
							</Link>
						</li>
					</ul>
				</div>
			</header>
		)
	}
}
