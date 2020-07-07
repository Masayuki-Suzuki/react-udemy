import React, { useEffect, useRef, useState } from 'react'
import axios from 'axios'
import debounce from 'lodash/debounce'

type Result = {
    ns: number
    pageid: number
    size: number
    snippet: string
    timestamp: string
    title: string
    wordcount: number
}

const Search = (): JSX.Element => {
    const [term, setTerm] = useState('')
    const [results, setResults] = useState<Result[]>([])

    const apiHandler = useRef(
        debounce(async (newTerm: string) => {
            const params = {
                action: 'query',
                list: 'search',
                origin: '*',
                format: 'json',
                srsearch: newTerm || 'Programming'
            }
            const { data } = await axios.get('https://en.wikipedia.org/w/api.php', { params })
            setResults(data.query.search)
        }, 300)
    )

    useEffect(() => {
        apiHandler.current(term)
    }, [term])

    const renderedResult = results.map(result => (
        <div key={result.pageid} className="item">
            <div className="content">
                <h3 className="header">{result.title}</h3>
                <span dangerouslySetInnerHTML={{ __html: result.snippet }}></span>
            </div>
        </div>
    ))

    return (
        <div>
            <div className="ui form">
                <div className="field">
                    <label>Enter Search Term</label>
                    <input type="text" className="input" value={term} onChange={e => setTerm(e.target.value)} />
                </div>
            </div>
            <div className="ui celled list">{renderedResult}</div>
        </div>
    )
}

export default Search
