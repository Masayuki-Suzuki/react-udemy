import axios from 'axios'
import { FETCH_COMMENTS, SAVE_COMMENT } from '~/actions/types'
import { ActionSaveComment } from '~/types/actions'

export const saveComment = (payload: string): ActionSaveComment => {
    return {
        type: SAVE_COMMENT,
        payload
    }
}

export const fetchComments = () => {
    const res = axios.get('http://jsonplaceholder.typicode.com/comments')
    return {
        type: FETCH_COMMENTS,
        payload: res
    }
}
