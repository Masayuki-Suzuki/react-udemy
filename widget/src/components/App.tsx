import React, { useState } from 'react'
import { DropdownOption } from '~/components/Dropdown'
import Translate from '~/components/Translate'

export type Item = {
    title: string
    content: string
}

// const items: Item[] = [
//     {
//         title: 'What is React?',
//         content: 'React is a front end javascript framework'
//     },
//     {
//         title: 'Why use React?',
//         content: 'React is a favourite JS library among engineers'
//     },
//     {
//         title: 'How do you use React?',
//         content: 'You use React by creating components'
//     }
// ]

const options: DropdownOption[] = [
    {
        label: 'The Colour Red',
        value: 'red'
    },
    {
        label: 'The Colour Green',
        value: 'green'
    },
    {
        label: 'A Shade of Blue',
        value: 'blue'
    }
]

const App = (): JSX.Element => {
    const [selected, setSelected] = useState(options[0])
    const [showDropdown, setShowDropdown] = useState(true)

    return (
        <div className="App" style={{ padding: '24px' }}>
            {/*<Accordion items={items} />*/}
            {/*<Search />*/}
            {/*<div>*/}
            {/*    <button*/}
            {/*        onClick={() => setShowDropdown(!showDropdown)}*/}
            {/*        className="ui button primary"*/}
            {/*        style={{ marginBottom: '16px' }}*/}
            {/*    >*/}
            {/*        Toggle Dropdown*/}
            {/*    </button>*/}
            {/*</div>*/}
            {/*{showDropdown ? <Dropdown options={options} selected={selected} onSelectedChange={setSelected}
             title={'Select a Colour'}
             /> :
             null}*/}
            <Translate />
        </div>
    )
}

export default App
