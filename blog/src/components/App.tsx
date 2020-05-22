import React from 'react'
import { connect } from 'react-redux'
import PostList from './PostList'

const App = () => {
    return (
        <div className="ui container" style={{ paddingTop: '32px' }}>
            <PostList />
        </div>
    )
}

export default connect()(App)
