import 'whatwg-fetch'
import 'raf/polyfill'
import {configure} from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

configure({adapter: new Adapter()})


window.mockResponse = (status, statusText, response) => {
	return new window.Response(response, {
		status    : status,
		statusText: statusText,
		headers   : {
			'Content-type': 'application/json'
		}
	})
}
