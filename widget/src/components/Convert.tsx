import React, { useEffect, useRef, useState } from 'react'
import debounce from 'lodash/debounce'
import axios from 'axios'
import { DropdownOption } from '~/components/Dropdown'

type ConvertProps = {
    text: string
    language: DropdownOption
}

const Convert = ({ text, language }: ConvertProps): JSX.Element => {
    const [result, setResult] = useState('')

    const apiHandler = useRef(
        debounce(async (newTerm: string, language: string) => {
            const params = {
                q: newTerm,
                format: 'text',
                target: language,
                key: process.env.REACT_APP_TRANSLATE_API_KEY
            }
            const {
                data: { data }
            } = await axios.post('https://translation.googleapis.com/language/translate/v2', {}, { params })
            console.log(data)
            setResult(data.translations[0].translatedText)
        }, 500)
    )

    useEffect(() => {
        apiHandler.current(text, language.value)
    }, [language, text])

    return (
        <p className="ui description" style={{ fontSize: '16px', textTransform: 'capitalize' }}>
            {result}
        </p>
    )
}

export default Convert
