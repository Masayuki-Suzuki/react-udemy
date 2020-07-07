import React from 'react'
import Search from '~/components/Search'

export type Item = {
    title: string
    content: string
}

const items: Item[] = [
    {
        title: 'What is React?',
        content: 'React is a front end javascript framework'
    },
    {
        title: 'Why use React?',
        content: 'React is a favourite JS library among engineers'
    },
    {
        title: 'How do you use React?',
        content: 'You use React by creating components'
    }
]

const App = (): JSX.Element => {
    return (
        <div className="App">
            {/*<Accordion items={items} />*/}
            <Search />
        </div>
    )
}

export default App
