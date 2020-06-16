import React from 'react'
import commentsReducer from '~/reducers/commentsReducer'
import { SAVE_COMMENT } from '~/actions/types'

describe('Testing comments reducer', () => {
    it('handles actions of type SAVE_COMMENT', () => {
        const action = {
            type: SAVE_COMMENT,
            payload: 'New Comment'
        }

        const newState = commentsReducer([], action)

        expect(newState).toEqual(['New Comment'])
    })

    it('handles action with unknown type', () => {
        const newState = commentsReducer([], { type: 'UNKNOWN_TYPE', payload: 'UNKNOWN TYPE' })

        expect(newState).toEqual([])
    })
})
