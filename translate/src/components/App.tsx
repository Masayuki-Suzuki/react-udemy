import React from 'react'
import ColourContext from '../context/colourContext'
import { LanguageStore } from '../context/languageContext'
import LanguageSelector from './LanguageSelector'
import UserCreate from './UserCreate'

type AppPropsState = unknown

type AppState = {
    colour: 'primary' | 'negative'
}

class App extends React.Component<AppPropsState, AppState> {
    state: AppState = {
        colour: 'primary'
    }

    render(): JSX.Element {
        return (
            <div className="ui container" style={{ paddingTop: '24px' }}>
                <LanguageStore>
                    <LanguageSelector />
                    <ColourContext.Provider value={this.state.colour}>
                        <UserCreate />
                    </ColourContext.Provider>
                </LanguageStore>
            </div>
        )
    }
}

export default App
