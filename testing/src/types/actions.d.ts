import { FetchComments } from '~/types/state'

export type DispatchFunction = ThunkAction<Promise<void>, State>

export type ActionSaveComment = {
    type: string
    payload: string
}

export type ActionFetchComments = {
    type: 'FETCH_COMMENTS'
    payload: FetchComments
}
