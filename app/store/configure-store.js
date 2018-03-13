import createHistory from 'history/createBrowserHistory'
import {applyMiddleware, compose, createStore} from 'redux'
import {install} from 'redux-loop';
import {routerMiddleware} from 'react-router-redux'
import rootReducer from '../reducers'

export const history = createHistory()

const middleware       = routerMiddleware(history)
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

export function configureStore(initialState) {
	const store = createStore(
		rootReducer,
		{},
		composeEnhancers(
			applyMiddleware(middleware),
			install()
		)
	)

	return store
}
