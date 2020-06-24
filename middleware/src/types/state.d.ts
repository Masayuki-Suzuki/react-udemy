export type FetchComment = {
    postId: number
    id: number
    name: string
    email: string
    body: string
}

export type FetchComments = FetchComment[]

export type FetchResponse = {
    data: FetchComments
}

export type State = {
    comments: string[]
}
