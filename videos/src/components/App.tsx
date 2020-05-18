import React from 'react'
import youtube from '../libs/youtube'
import SearchBar from './SearchBar'
import VideoDetail from './VideoDetail'
import VideoList from './VideoList'
import { YoutubeItem } from '~/types/youtube'
import { Nullable } from '~/types/helper'

type AppPropsType = {}

type AppState = {
    videos: YoutubeItem[]
    selectedVideo: Nullable<YoutubeItem>
}

class App extends React.Component<AppPropsType, AppState> {
    state = {
        videos: [],
        selectedVideo: null
    }

    onTermSubmit = async (term: string) => {
        const params = {
            q: term,
            part: 'snippet',
            type: 'video',
            maxResults: 5,
            key: process.env.REACT_APP_YOUTUBE_API_KEY
        }
        const { data } = await youtube.get('/search', { params })
        this.setState({ videos: data.items, selectedVideo: data.items[0] })
    }

    onVideoSelect = video => this.setState({ selectedVideo: video })

    // async componentDidMount() {
    //     await this.onTermSubmit('react.js')
    // }

    render(): JSX.Element {
        return (
            <div className="ui container" style={{ paddingTop: '10px' }}>
                <SearchBar onFormSubmit={this.onTermSubmit} />
                <div className="ui grid">
                    <div className="ui row">
                        <div className="eleven wide column">
                            <VideoDetail video={this.state.selectedVideo} />
                        </div>
                        <div className="five wide column">
                            <VideoList onVideoSelect={this.onVideoSelect} videos={this.state.videos} />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default App
