import React from 'react'
import LanguageContext from '../context/languageContext'

type FieldPropsType = unknown
type FieldState = unknown

class Field extends React.Component<FieldPropsType, FieldState> {
    static contextType = LanguageContext

    render(): JSX.Element {
        return (
            <div className="ui field">
                <div>
                    <label>{this.context.language === 'eng' ? 'Name' : '名前'}:&nbsp;</label>
                </div>
                <div className="ui input">
                    <input type="text" placeholder="John Snow" />
                </div>
            </div>
        )
    }
}

export default Field
