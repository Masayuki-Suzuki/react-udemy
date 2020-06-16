import { FETCH_COMMENTS, SAVE_COMMENT } from '~/actions/types'
import { FetchComment, FetchComments } from '~/types/state'

type Action = {
    type: string
    payload: string | FetchComments
}

const isString = (elm: unknown): elm is string => {
    return typeof elm === 'string'
}

const isFetchComments = (elm: unknown): elm is FetchComments => {
    return Array.isArray(elm) && 'body' in elm[0]
}

export default (state: string[] = [], action: Action): string[] => {
    switch (action.type) {
        case SAVE_COMMENT:
            if (isString(action.payload)) {
                return [...state, action.payload]
            }
            return state

        case FETCH_COMMENTS:
            if (isFetchComments(action.payload)) {
                return action.payload.map((comment: FetchComment) => comment.body)
            }
            return state

        default:
            return state
    }
}
