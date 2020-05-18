import React from 'react'
import { YoutubeItem } from '~/types/youtube'
import { Nullable } from '~/types/helper'

type VideoDetailPropsType = {
    video: Nullable<YoutubeItem>
}

const VideoDetail = ({ video }: VideoDetailPropsType) => {
    if (!video) {
        return null
    }
    return (
        <div>
            <div className="ui embed">
                <iframe src={`https://www.youtube.com/embed/${video.id.videoId}`} title={video.snippet.title} />
            </div>
            <div className="ui segment">
                <h4 className="ui header">{video.snippet.title}</h4>
                <p className="ui ">{video.snippet.channelTitle}</p>
                <p className="ui description">{video.snippet.description}</p>
            </div>
        </div>
    )
}

export default VideoDetail
