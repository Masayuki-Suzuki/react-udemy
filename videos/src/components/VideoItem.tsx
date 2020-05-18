import '../styles/VideoItem.sass'
import React from 'react'
import { YoutubeItem } from '~/types/youtube'

type VideoItemPropsType = {
    video: YoutubeItem
    onVideoSelect: (video: YoutubeItem) => void
}

const VideoItem = ({ video, onVideoSelect }: VideoItemPropsType) => {
    return (
        <div onClick={() => onVideoSelect(video)} className="video-item item">
            <img className="ui image" src={video.snippet.thumbnails.medium.url} alt={video.snippet.description} />
            <div className="content">
                <h2 className="header">{video.snippet.title}</h2>
                <p className="description">{video.snippet.publishTime}</p>
            </div>
        </div>
    )
}

export default VideoItem
