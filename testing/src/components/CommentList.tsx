import React from 'react'
import { connect } from 'react-redux'
import { State } from '~/types/state'

type CommentListPropsType = {
    comments: string[]
}

const CommentList = ({ comments }: CommentListPropsType): JSX.Element => {
    const renderComments = () => comments.map(comment => <li key={comment}>{comment}</li>)

    return (
        <div>
            <h3 className="header" style={{ marginTop: '32px' }}>
                Comment List
            </h3>
            <ul>{renderComments()}</ul>
        </div>
    )
}

const mapStateToProps = ({ comments }: State) => {
    return { comments }
}

export default connect(mapStateToProps)(CommentList)
