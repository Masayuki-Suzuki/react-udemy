import React from 'react'
import ColourContext from '../context/colourContext'
import LanguageContext from '../context/languageContext'
import UserCreate from './UserCreate'

type AppPropsState = unknown

type AppState = {
    language: 'english' | 'japanese'
    colour: 'primary' | 'negative'
}

class App extends React.Component<AppPropsState, AppState> {
    state: AppState = {
        language: 'english',
        colour: 'primary'
    }

    onLanguageChange = (language: 'english' | 'japanese', colour: 'primary' | 'negative'): void => {
        this.setState({ language, colour })
    }

    render(): JSX.Element {
        return (
            <div className="ui container" style={{ paddingTop: '24px' }}>
                <div className="content">
                    <h4>
                        Select a language:&nbsp;
                        <i
                            onClick={() => this.onLanguageChange('english', 'primary')}
                            className="flag uk"
                            style={{ cursor: 'pointer' }}
                        />
                        <i
                            onClick={() => this.onLanguageChange('japanese', 'negative')}
                            className="flag jp"
                            style={{ cursor: 'pointer' }}
                        />
                    </h4>
                </div>
                <ColourContext.Provider value={this.state.colour}>
                    <LanguageContext.Provider value={this.state.language}>
                        <UserCreate />
                    </LanguageContext.Provider>
                </ColourContext.Provider>
            </div>
        )
    }
}

export default App
