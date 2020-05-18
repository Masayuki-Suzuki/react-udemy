import React from 'react'
import youtube from '../libs/youtube'
import SearchBar from './SearchBar'

type AppPropsType = {}

type AppState = {
    videos: YoutubeItem[]
}

type Thumbnail = {
    height: number
    url: string
    width: number
}

type Snippet = {
    channelId: string
    channelTitle: string
    description: string
    liveBroadcastContent: string
    publishTime: string | Date
    publishedAt: string | Date
    thumbnails: {
        default: Thumbnail
        hight: Thumbnail
        medium: Thumbnail
    }
    title: string
}

type YoutubeItem = {
    etag: string
    id: {
        kind: string
        videoId: string
    }
    kind: string
    snippet: Snippet
}

class App extends React.Component<AppPropsType, AppState> {
    state = {
        videos: []
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
        this.setState({ videos: data.items })
    }

    render(): JSX.Element {
        return (
            <div className="ui container" style={{ paddingTop: '10px' }}>
                <SearchBar onFormSubmit={this.onTermSubmit} />
            </div>
        )
    }
}

export default App
