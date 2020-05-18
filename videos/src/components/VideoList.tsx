import React from 'react'
import VideoItem from './VideoItem'
import { YoutubeItem } from '~/types/youtube'

type VideoListPropsType = {
    videos: YoutubeItem[]
    onVideoSelect: (video: YoutubeItem) => void
}

const VideoList = ({ videos, onVideoSelect }: VideoListPropsType) => {
    const renderedList = videos.map(video => (
        <VideoItem video={video} onVideoSelect={onVideoSelect} key={video.id.videoId} />
    ))
    return <div className="ui relaxed divided list">{renderedList}</div>
}

export default VideoList
