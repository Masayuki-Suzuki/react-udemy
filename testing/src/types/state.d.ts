export type FetchComment = {
    postId: number
    id: number
    name: string
    email: string
    body: string
}

export type FetchComments = FetchComment[]

export type State = {
    comments: string[]
}
