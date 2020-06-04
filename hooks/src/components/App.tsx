import React, { useState } from 'react'
import ResourceList from '~/components/ResourceList'
import UserList from '~/components/UserList'

const App = (): JSX.Element => {
    const [resource, setResource] = useState('posts')

    return (
        <div className="ui container" style={{ paddingTop: '32px' }}>
            <UserList />
            <div>
                <button onClick={() => setResource('posts')} className="ui button">
                    Posts
                </button>
                <button onClick={() => setResource('todos')} className="ui button">
                    Todos
                </button>
            </div>
            <ResourceList resource={resource} />
        </div>
    )
}

export default App
