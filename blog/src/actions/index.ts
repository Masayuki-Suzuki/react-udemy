import _ from 'lodash'
import jsonPlaceholder from '../libs/jsonPlaceholder'

export const fetchPostsAndUsers = () => async (dispatch, getState) => {
    await dispatch(fetchPost())
    // const userIds = _.uniq(_.map(getState().posts, 'userId'))
    // await userIds.forEach(id => dispatch(fetchUser(id)))
    // console.log(getState().users)

    _.chain(getState().posts)
        .map('userId')
        .uniq()
        .forEach(id => dispatch(fetchUser(id)))
        .value()
}

export const fetchPost = () => async dispatch => {
    const { data } = await jsonPlaceholder.get('/posts')
    dispatch({ type: 'FETCH_POSTS', payload: data })
}

export const fetchUser = (id: number) => async dispatch => {
    const { data } = await jsonPlaceholder.get(`/users/${id}`)
    console.log(data)
    dispatch({ type: 'FETCH_USER', payload: data })
}
