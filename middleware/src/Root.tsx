import React, { PropsWithChildren } from 'react'
import { Provider } from 'react-redux'
import { applyMiddleware, compose, createStore } from 'redux'
import reducers from './reducers'
import async from '~/middlewares/async'

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
    const store = createStore(reducers, initialState, composeReduxDevToolsEnhancers(applyMiddleware(async)))
    return <Provider store={store}>{children}</Provider>
}
