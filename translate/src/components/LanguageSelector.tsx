import React from 'react'
import LanguageContext from '../context/languageContext'

type LanguageSelectorPropsType = unknown
type LanguageSelectorState = unknown

class LanguageSelector extends React.Component<LanguageSelectorPropsType, LanguageSelectorState> {
    static contextType = LanguageContext

    render(): JSX.Element {
        console.log(this.context)
        return (
            <div className="content">
                <h4>
                    Select a language:&nbsp;
                    <i
                        onClick={() => this.context.onLanguageChange('eng')}
                        className="flag uk"
                        style={{ cursor: 'pointer' }}
                    />
                    <i
                        onClick={() => this.context.onLanguageChange('jpn')}
                        className="flag jp"
                        style={{ cursor: 'pointer' }}
                    />
                </h4>
            </div>
        )
    }
}

export default LanguageSelector
