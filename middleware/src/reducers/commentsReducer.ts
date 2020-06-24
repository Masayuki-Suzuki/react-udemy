import { FETCH_COMMENTS, SAVE_COMMENT } from '~/actions/types'
import { FetchComment, FetchResponse } from '~/types/state'

type Action = {
    type: string
    payload: string | FetchResponse
}

const isString = (elm: unknown): elm is string => {
    return typeof elm === 'string'
}

const isFetchComments = (elm: any): elm is FetchResponse => {
    return 'data' in elm && Array.isArray(elm.data) && 'body' in elm.data[0]
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
                return action.payload.data.map((comment: FetchComment) => comment.body)
            }
            return state

        default:
            return state
    }
}
