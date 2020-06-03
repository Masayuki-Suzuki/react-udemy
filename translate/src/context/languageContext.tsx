import React from 'react'

export type Lang = 'eng' | 'jpn'
type LanguageStorePropsType = unknown
type LanguageStoreState = {
    language: Lang
    onLanguageChange?: (language: Lang) => void
}

const Context = React.createContext<LanguageStoreState>({ language: 'eng' })

export class LanguageStore extends React.Component<LanguageStorePropsType, LanguageStoreState> {
    state: LanguageStoreState = { language: 'eng' }

    onLanguageChange = (language: Lang): void => {
        this.setState({ language })
    }

    render(): JSX.Element {
        return (
            <Context.Provider value={{ ...this.state, onLanguageChange: this.onLanguageChange }}>
                {this.props.children}
            </Context.Provider>
        )
    }
}

export default Context
