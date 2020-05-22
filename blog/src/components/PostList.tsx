import React from 'react'
import { connect } from 'react-redux'
import { fetchPostsAndUsers } from '../actions'
import UserHeader from './UserHeader'

type PostListPropsType = {
    fetchPostsAndUsers: () => void
    posts: jp.Post[]
}
type PostListState = {}

class PostList extends React.Component<PostListPropsType, PostListState> {
    componentDidMount(): void {
        this.props.fetchPostsAndUsers()
    }

    renderList() {
        return this.props.posts.map(post => {
            return (
                <div className="item" key={post.id}>
                    <i className="large middle aligned icon user"></i>
                    <div className="content">
                        <div className="description">
                            <h3 className="header">{post.title}</h3>
                            <p className="">{post.body}</p>
                        </div>
                        <UserHeader userId={post.userId} />
                    </div>
                </div>
            )
        })
    }

    render(): JSX.Element {
        return <div className="ui relaxed divided list">{this.renderList()}</div>
    }
}

const mapStateToProps = state => {
    return { posts: state.posts }
}

export default connect(mapStateToProps, { fetchPostsAndUsers })(PostList)
