import React, { ChangeEvent, FormEvent, useState } from 'react'
import { connect } from 'react-redux'
import * as actions from '~/actions'

type CommentBoxPropsType = {
    saveComment: (payload: string) => void
    fetchComments: () => void
}

const CommentBox = ({ saveComment, fetchComments }: CommentBoxPropsType) => {
    const [comment, setComment] = useState('')

    const onChangeTextarea = (e: ChangeEvent<HTMLTextAreaElement>) => {
        setComment(e.target.value)
    }

    const onSubmitForm = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        saveComment(comment)
        setComment('')
    }

    return (
        <div>
            <form onSubmit={onSubmitForm}>
                <h3 className="header">Add a Comment</h3>
                <textarea onChange={onChangeTextarea} value={comment} cols={80} rows={10} />
                <div style={{ margin: '16px 0' }}>
                    <button className="ui button primary">Submit</button>
                </div>
            </form>
            <div>
                <button onClick={fetchComments} className="ui button">
                    Fetch Comments
                </button>
            </div>
        </div>
    )
}

export default connect(null, actions)(CommentBox)
