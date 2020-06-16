import React from 'react'
import { shallow } from 'enzyme'
import App from '~/components/App'
import CommentBox from '~/components/CommentBox'
import CommentList from '~/components/CommentList'

let wrapped

describe('<App />', () => {
    beforeAll(() => {
        wrapped = shallow(<App />)
    })

    it('shows a comment box', () => {
        expect(wrapped.find(CommentBox).length).toEqual(1)
    })

    it(`doesn’t show comment box no more than 2`, () => {
        expect(wrapped.find(CommentBox).length).toBe(1)
    })

    it('shows a comment list', () => {
        expect(wrapped.find(CommentList).length).toEqual(1)
    })
})
