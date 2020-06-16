import React from 'react'
import '../styles/App.sass'
import CommentList from '~/components/CommentList'
import CommentBox from '~/components/CommentBox'

const App = (): JSX.Element => {
    return (
        <div style={{ padding: '32px' }}>
            <CommentBox />
            <CommentList />
        </div>
    )
}

export default App
