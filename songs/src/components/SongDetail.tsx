import React from 'react'
import { connect } from 'react-redux'

type SongDetailPropsType = {
    selectedSong: {
        title: string
        duration: string
    }
}

const SongDetail = ({ selectedSong }: SongDetailPropsType) => {
    console.log(selectedSong)
    return (
        <div className="song-detail">
            <div className="container">
                {selectedSong ? (
                    <p className="header">
                        {selectedSong.title} - {selectedSong.duration}
                    </p>
                ) : (
                    <h2 className="header">Select Song</h2>
                )}
            </div>
        </div>
    )
}

const mapStateToProps = state => {
    return { selectedSong: state.selectedSongReducer }
}

export default connect(mapStateToProps)(SongDetail)
