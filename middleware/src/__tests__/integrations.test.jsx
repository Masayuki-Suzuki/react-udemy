import React from 'react'
import moxios from 'moxios'
import { mount } from 'enzyme'
import Root from '../Root'
import App from '../components/App'
import comments from './commentsMock.json'

let wrapped

// Attempt to render the *entire* app.
beforeAll(() => {
    const response = comments
    moxios.install()
    moxios.stubRequest('https://jsonplaceholder.typicode.com/comments', {
        status: 200,
        response
    })

    wrapped = mount(
        <Root>
            <App />
        </Root>
    )
})

afterAll(() => {
    moxios.uninstall()
})

describe('Fetch Comments', () => {
    it('can fetch a list of comments and display them', done => {
        // find the 'fetchComments' button and click it.
        wrapped.find('.fetch-comments').simulate('click')

        moxios.wait(() => {
            wrapped.update()
            // Expect to find a list of comments.
            expect(wrapped.find('li').length).toEqual(10)
            done()
            wrapped.unmount()
        })
    })
})
