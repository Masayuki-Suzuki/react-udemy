import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { applyMiddleware, compose, createStore } from 'redux'
import thunk from 'redux-thunk'
import 'semantic-ui-css/semantic.min.css'
import App from './components/App'
import reducers from './reducers'

/* Use redux devtools */
interface ExWindow extends Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose
}
// eslint-disable-next-line
declare var window: ExWindow
const composeReduxDevToolsEnhancers =
    (typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose

const store = createStore(reducers, composeReduxDevToolsEnhancers(applyMiddleware(thunk)))

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
)
