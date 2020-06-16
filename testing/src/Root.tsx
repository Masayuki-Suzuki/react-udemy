import React, { PropsWithChildren } from 'react'
import { Provider } from 'react-redux'
import { applyMiddleware, compose, createStore } from 'redux'
import reduxPromise from 'redux-promise'
import reduxThunk from 'redux-thunk'
import reducers from './reducers'

type RootPropsType = {
    initialState?: {
        comments?: string[]
    }
}

/* Use redux devtools */
interface ExWindow extends Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose
}
// eslint-disable-next-line
declare var window: ExWindow
const composeReduxDevToolsEnhancers =
    (typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose

export default ({ children, initialState = {} }: PropsWithChildren<RootPropsType>): JSX.Element => {
    const store = createStore(
        reducers,
        initialState,
        composeReduxDevToolsEnhancers(applyMiddleware(reduxPromise, reduxThunk))
    )
    return <Provider store={store}>{children}</Provider>
}
