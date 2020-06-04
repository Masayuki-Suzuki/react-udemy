import React from 'react'
import useResources, { ApiUserData } from '~/libs/useResources'

const UserList = (): JSX.Element => {
    const users = useResources('users') as ApiUserData[]

    return (
        <ul>
            {users.map(user => (
                <li key={user.id}>{user.name}</li>
            ))}
        </ul>
    )
}

export default UserList
