import React, { FormEvent } from 'react'

type SearchBarPropsType = {
    onSubmit: (term: string) => void
}

type SearchBarState = {
    term: string
}

class SearchBar extends React.Component<SearchBarPropsType, SearchBarState> {
    state = { term: '' }

    onFormSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        this.props.onSubmit(this.state.term)
    }

    render(): JSX.Element {
        return (
            <div className="ui segment">
                <form className="ui form" onSubmit={this.onFormSubmit}>
                    <div className="field">
                        <label>Image Search</label>
                        <input
                            type="text"
                            value={this.state.term}
                            onChange={e => this.setState({ term: e.target.value })}
                        />
                    </div>
                </form>
            </div>
        )
    }
}

export default SearchBar
