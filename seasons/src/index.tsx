import React from 'react'
import ReactDOM from 'react-dom'
import 'semantic-ui-css/semantic.min.css'
import SeasonDisplay from './components/SeasonDisplay'
import Spinner from './components/Spinner'
import { Nullable } from '~/types/helper'

type AppPropsType = {}
type AppState = {
    lat: Nullable<number>
    errorMessage: Nullable<string>
}

export default class App extends React.Component<AppPropsType, AppState> {
    state = {
        lat: null,
        errorMessage: null
    }

    componentDidMount(): void {
        window.navigator.geolocation.getCurrentPosition(
            (position: Position) => {
                this.setState({ lat: position.coords.latitude })
            },
            err => {
                console.error(err)
                this.setState({ errorMessage: err.message || 'Location Unavailable' })
            }
        )
    }

    render(): JSX.Element {
        return (
            <div>
                {this.state.lat || this.state.errorMessage ? (
                    this.state.errorMessage ? (
                        <div>
                            <h1>Oops!! We couldn't get your location.</h1>
                            <h3>Error Message: {this.state.errorMessage}</h3>
                        </div>
                    ) : (
                        <SeasonDisplay lat={this.state.lat} />
                    )
                ) : (
                    <Spinner message="Please accept location request." />
                )}
            </div>
        )
    }
}

// const App = () => {

//     return (
//         <div>
//             <h1>Hello</h1>
//             <SeasonDisplay />
//         </div>
//     )
// }

ReactDOM.render(<App />, document.querySelector('#root'))
