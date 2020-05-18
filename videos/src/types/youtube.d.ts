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

export type YoutubeItem = {
    etag: string
    id: {
        kind: string
        videoId: string
    }
    kind: string
    snippet: Snippet
}
