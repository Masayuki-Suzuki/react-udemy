import axios from 'axios'
import { Dispatch } from 'redux'
import { FETCH_COMMENTS, SAVE_COMMENT } from '~/actions/types'
import { ActionSaveComment, DispatchFunction } from '~/types/actions'

export const saveComment = (payload: string): ActionSaveComment => {
    return {
        type: SAVE_COMMENT,
        payload
    }
}

export const fetchComments = (): DispatchFunction => async (dispatch: Dispatch): Promise<void> => {
    const { data } = await axios.get('http://jsonplaceholder.typicode.com/comments')
    dispatch({
        type: FETCH_COMMENTS,
        payload: data
    })
}
