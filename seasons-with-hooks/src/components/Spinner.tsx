import React from 'react'

type SpinnerPropsType = {
    message: string
}

const Spinner = ({ message }: SpinnerPropsType): JSX.Element => {
    return (
        <div className="ui active dimmer">
            <div className="ui large text loader">{message}</div>
        </div>
    )
}

Spinner.defaultProps = {
    message: 'Loading...'
} as SpinnerPropsType

export default Spinner
