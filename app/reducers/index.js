import {combineReducers} from 'redux-loop'
import {routerReducer} from 'react-router-redux'

import sampleReducer from './sample.js'

const rootReducer = combineReducers({
	sample: sampleReducer,
	router: routerReducer
})

export default rootReducer
