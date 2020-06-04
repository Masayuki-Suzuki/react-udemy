import React from 'react'
import ReactDOM from 'react-dom'
import 'semantic-ui-css/semantic.min.css'
import SeasonDisplay from './components/SeasonDisplay'
import Spinner from './components/Spinner'
import useLocation from '~/libs/useLocation'

const App = (): JSX.Element => {
    const { lat, errorMessage } = useLocation()
    return (
        <div>
            {lat || errorMessage ? (
                errorMessage ? (
                    <div>
                        <h1>Oops!! We couldn't get your location.</h1>
                        <h3>Error Message: {errorMessage}</h3>
                    </div>
                ) : (
                    <SeasonDisplay lat={lat} />
                )
            ) : (
                <Spinner message="Please accept location request." />
            )}
        </div>
    )
}

ReactDOM.render(<App />, document.querySelector('#root'))
