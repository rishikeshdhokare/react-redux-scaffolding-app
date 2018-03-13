import React from 'react'
import {render} from 'react-dom'
import {Provider} from 'react-redux'
import {ConnectedRouter} from 'react-router-redux'
import {configureStore, history} from './store/configure-store'
import App from './pages/App'
import Styles from '../app/styles/app.scss'

const initialState = {
	sample: {
		name: "ThoughtWorks",
		data: []
	}
}

const store = configureStore(initialState)

render(
	<Provider store={store}>
		<ConnectedRouter history={history}>
			<App/>
		</ConnectedRouter>
	</Provider>, document.getElementById('root')
)
