import React from 'react'
import unsplash from '../libs/unsplash'
import SearchBar from './SearchBar'
import { Unsplash } from '~/types/unsplash'

type AppPropsType = {}
type AppState = {
    images: Unsplash.Image[]
    total: number
}

class App extends React.Component<AppPropsType, AppState> {
    state = {
        images: [],
        total: 0
    }

    onSearchSubmit = async (term: string) => {
        const params = { query: term }
        const { data } = await unsplash.get('/search/photos', { params }).catch(err => {
            console.error(err.message)
            throw err
        })

        this.setState({ images: data.results, total: data.total })
    }

    render() {
        return (
            <div className="ui container" style={{ marginTop: '10px' }}>
                <SearchBar onSubmit={this.onSearchSubmit} />
                <p>Found: {this.state.total} images.</p>
            </div>
        )
    }
}

// const App = (props: AppPropsType) => {
//     return (
//         <div className="ui container" style={{ marginTop: '10px' }}>
//             <SearchBar />
//         </div>
//     )
// }

export default App
