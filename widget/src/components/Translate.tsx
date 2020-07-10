import React, { useState } from 'react'
import Dropdown, { DropdownOption } from '~/components/Dropdown'
import Convert from '~/components/Convert'

const options: DropdownOption[] = [
    {
        label: 'English',
        value: 'en'
    },
    {
        label: 'Afrikaans',
        value: 'af'
    },
    {
        label: 'Arabic',
        value: 'ar'
    },
    {
        label: 'Hindi',
        value: 'hi'
    },
    {
        label: 'Japanese',
        value: 'ja'
    },
    {
        label: 'Spanish',
        value: 'es'
    },
    {
        label: 'Dutch',
        value: 'nl'
    },
    {
        label: 'German',
        value: 'de'
    }
]

const Translate = (): JSX.Element => {
    const [selected, setSelected] = useState(options[0])
    const [text, setText] = useState('')

    return (
        <div>
            <h1>Translate</h1>
            <div className="ui form" style={{ marginBottom: '24px' }}>
                <div className="field">
                    <label>Enter Text</label>
                    <input type="text" value={text} onChange={e => setText(e.target.value)} />
                </div>
            </div>
            <Dropdown
                options={options}
                selected={selected}
                onSelectedChange={setSelected}
                title={'Select a language'}
            />
            <h2 style={{ marginTop: '24px' }}>Output</h2>
            <Convert text={text} language={selected} />
        </div>
    )
}

export default Translate
