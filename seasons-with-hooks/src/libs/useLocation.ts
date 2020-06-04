import { useEffect, useState } from 'react'
import { Nullable } from '~/types/helper'

export default () => {
    const [lat, setLat] = useState<Nullable<number>>(null)
    const [errorMessage, setErrorMessage] = useState<Nullable<string>>(null)

    useEffect(() => {
        window.navigator.geolocation.getCurrentPosition(
            (position: Position) => {
                setLat(position.coords.latitude)
            },
            err => {
                console.error(err)
                setErrorMessage(err.message || 'Location Unavailable')
            }
        )
    }, [])

    return { lat, errorMessage }
}
