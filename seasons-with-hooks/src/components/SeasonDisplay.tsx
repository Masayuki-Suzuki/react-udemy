import '../styles/seasonDisplay.sass'
import React from 'react'
import { Nullable } from '~/types/helper'

type SeasonDisplayProps = {
    lat: Nullable<number>
}

const seasonConfig = {
    summer: {
        text: "Let's hit the beach!",
        iconName: 'sun'
    },
    winter: {
        text: 'Burr, it is chilly',
        iconName: 'snowflake outline'
    }
}

const getSeason = (lat: number, month): string => {
    if (month > 2 && month < 9) {
        return lat > 0 ? 'summer' : 'winter'
    } else {
        return lat > 0 ? 'winter' : 'summer'
    }
}

const SeasonDisplay = ({ lat }: SeasonDisplayProps): JSX.Element => {
    const season = getSeason(lat ?? 0, new Date().getMonth())
    const { text, iconName } = seasonConfig[season]

    return (
        <div className={`season-display ${season}`}>
            <i className={`icon-left icon ${iconName} massive`} />
            <h1>{text}</h1>
            <i className={`icon-right icon ${iconName} massive`} />
        </div>
    )
}

export default SeasonDisplay
