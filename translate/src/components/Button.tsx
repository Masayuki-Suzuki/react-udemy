import React from 'react'
import ColourContext from '../context/colourContext'
import LanguageContext from '../context/languageContext'

class Button extends React.Component {
    renderButton = (colour: string): JSX.Element => {
        return (
            <button className={`ui button ${colour}`}>
                <LanguageContext.Consumer>
                    {({ language }) => (language === 'eng' ? 'Submit' : '送信')}
                </LanguageContext.Consumer>
            </button>
        )
    }

    render(): JSX.Element {
        return <ColourContext.Consumer>{colour => this.renderButton(colour)}</ColourContext.Consumer>
    }
}

export default Button
