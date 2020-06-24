import React from 'react'
import { mount } from 'enzyme'
import Root from '../../Root'
import CommentList from '../CommentList'

let wrapped

describe('<CommentList />', () => {
    const initialState = {
        comments: ['Comment 1', 'Comment 2']
    }
    beforeAll(() => {
        wrapped = mount(
            <Root initialState={initialState}>
                <CommentList />
            </Root>
        )
    })

    it('creates one <li> per comment and should be 2 <li>', () => {
        expect(wrapped.find('li').length).toEqual(2)
    })

    it('shows the text for each comment', () => {
        expect(wrapped.render().text()).toContain('Comment 1')
        expect(wrapped.render().text()).toContain('Comment 2')
    })
})
