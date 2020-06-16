import React from 'react'
import { mount } from 'enzyme'
import CommentBox from '~/components/CommentBox'
import Root from '~/Root'

let wrapped
describe('<CommentBox />', () => {
    beforeAll(() => {
        wrapped = mount(
            <Root>
                <CommentBox />
            </Root>
        )
    })

    afterAll(() => {
        wrapped.unmount()
    })

    it('has a textare and a button', () => {
        expect(wrapped.find('textarea').length).toBe(1)
        expect(wrapped.find('button').length).toBe(2)
    })

    describe('the text area in <CommentBox />', () => {
        it('has a text area that users can type in', () => {
            const event = { target: { value: 'onChange handler test' } }
            wrapped.find('textarea').simulate('change', event)
            wrapped.update()
            expect(wrapped.find('textarea').prop('value')).toEqual(event.target.value)
        })

        it('when from is submitted, textarea gets emptied', () => {
            wrapped.find('form').simulate('submit')
            wrapped.update()

            expect(wrapped.find('textarea').prop('value')).toEqual('')
        })
    })
})
