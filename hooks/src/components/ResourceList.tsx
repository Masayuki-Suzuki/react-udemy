import React from 'react'
import useResources, { ApiData } from '~/libs/useResources'

type ResourceListPropsType = {
    resource: string
}

const ResourceList = ({ resource }: ResourceListPropsType): JSX.Element => {
    const resources = useResources(resource) as ApiData[]

    if (!resources) {
        return <div></div>
    }

    return (
        <ul className="ui list">
            {resources.map(res => (
                <li className="item">{res.title}</li>
            ))}
        </ul>
    )
}

export default ResourceList
