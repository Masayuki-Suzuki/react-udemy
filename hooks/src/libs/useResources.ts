import axios from 'axios'
import { useEffect, useState } from 'react'

export type ApiData = {
    userId: number
    id: number
    title: string
    body?: string
    completed?: boolean
}

export type ApiUserData = {
    id: number
    name: string
    username: string
    email: string
    address: {
        street: string
        suite: string
        city: string
        zipcode: string
        geo: {
            lat: string
            lng: string
        }
    }
    phone: string
    website: string
    company: {
        name: string
        catchPhrase: string
        bs: string
    }
}

export default (resource: string): ApiData[] | ApiUserData[] => {
    const [resources, setResources] = useState<ApiData[] | ApiUserData[]>([])

    useEffect(() => {
        ;(async (): Promise<void> => {
            const { data } = await axios.get(`https://jsonplaceholder.typicode.com/${resource}`)
            setResources(data)
        })()
    }, [resource])

    return resources
}
