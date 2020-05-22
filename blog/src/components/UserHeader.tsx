import React from 'react'
import { connect } from 'react-redux'

type UserHeaderPropsType = {
    userId: number
    user: jp.User
}
type UserHeaderState = {}

class UserHeader extends React.Component<UserHeaderPropsType, UserHeaderState> {
    render(): JSX.Element {
        return <div>{this.props.user ? this.props.user.name : null}</div>
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        user: state.users.find((user: jp.User) => user.id === ownProps.userId)
    }
}

export default connect(mapStateToProps)(UserHeader)
