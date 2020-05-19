import '../styles/SongList.sass'
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { selectSong } from '../actions'

type SongListProps = {
    songs: {
        title: string
        duration: string
    }[]
    selectSong: (payload: { title: string; duration: string }) => void
}
type SongListState = {}

class SongList extends Component<SongListProps, SongListState> {
    renderList() {
        return this.props.songs.map(song => {
            return (
                <div className="song-list" key={song.title}>
                    <div className="content">{song.title}</div>
                    <div className="content">
                        <button onClick={() => this.props.selectSong(song)} className="ui button primary">
                            Select
                        </button>
                    </div>
                </div>
            )
        })
    }

    render(): JSX.Element {
        return <div className="ui divided list">{this.renderList()}</div>
    }
}

const mapStateToProps = state => {
    return { songs: state.songsReducer }
}

export default connect(mapStateToProps, { selectSong })(SongList)
