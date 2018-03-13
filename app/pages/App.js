import React from 'react'
import {Route} from 'react-router-dom'
import SamplePage from './Sample'
import Header from '../containers/header'
import SamplePage2 from './Sample2'

const App = () =>
	<div>
		<Header/>
		<Route exact path="/" component={SamplePage}/>
		<Route exact path="/sample-page-2" component={SamplePage2}/>
	</div>


export default App
