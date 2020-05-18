import React, { FormEvent } from 'react'

type SearchBarPropsType = {
    onFormSubmit: (term: string) => void
}
type SearchBarState = {
    term: string
}

class SearchBar extends React.Component<SearchBarPropsType, SearchBarState> {
    state = {
        term: ''
    }

    onInputChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
        this.setState({ term: e.target.value })
    }

    onFormSubmit = (e: FormEvent<HTMLFormElement>): void => {
        e.preventDefault()
        this.props.onFormSubmit(this.state.term)
    }

    render(): JSX.Element {
        return (
            <div className="search-bar ui segment">
                <form onSubmit={this.onFormSubmit} className="ui form">
                    <div className="field">
                        <label>Video Search</label>
                        <input type="text" value={this.state.term} onChange={this.onInputChange} />
                    </div>
                </form>
            </div>
        )
    }
}

export default SearchBar
