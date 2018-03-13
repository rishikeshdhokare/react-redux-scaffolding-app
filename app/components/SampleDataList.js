import React from 'react';
import SampleDataItem from '../containers/sample-data-item';


export default class SampleDataList extends React.Component {
	constructor(props) {
		super(props)
	}

	renderList() {
		return this.props.data.map((movie, i) => <SampleDataItem key={i} movie={movie}/>)
	}

	renderSamuelJackson() {
		return (
			<div className="col-md-12 samuel-jackson">
				<div className="text-center">
					<img className="mb-4" src="https://kyleshevlin.com/wp-content/uploads/2016/11/redux_logo_2.png" alt=""/>
					<img src="https://i.imgur.com/Wo3YF30.png" alt=""/>
				</div>
			</div>
		)
	}

	renderSampleData() {
		return this.props.data.length ? this.renderList() : this.renderSamuelJackson()
	}

	render() {
		return (
			<div className="album py-5">
				<div className="container">
					<div className="row">
						{this.renderSampleData()}
					</div>
				</div>
			</div>
		)
	}
}
