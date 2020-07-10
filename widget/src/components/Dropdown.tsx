import React, { useEffect, useRef, useState } from 'react'

export type DropdownOption = {
    label: string
    value: string
}

type DropdownProps = {
    title: string
    options: DropdownOption[]
    selected: DropdownOption
    onSelectedChange: (val: DropdownOption) => void
}

const Dropdown = ({ options, selected, onSelectedChange, title }: DropdownProps): JSX.Element => {
    const [open, setOpen] = useState(false)
    const ref = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const onBodyClick = e => {
            if (ref.current && ref.current.contains(e.target)) {
                return
            }
            setOpen(false)
        }

        document.body.addEventListener('click', onBodyClick)

        // Like a componentWillUnmount function.
        return () => document.body.removeEventListener('click', onBodyClick)
    }, [])

    const renderedOptions = options.map(option => {
        if (option.value === selected.value) {
            return null
        }

        return (
            <div className="item" key={option.value} onClick={() => onSelectedChange(option)}>
                {option.label}
            </div>
        )
    })

    return (
        <div ref={ref} className="ui form">
            <div className="field">
                <label className="label">{title}</label>
                <div
                    onClick={() => setOpen(!open)}
                    className={`ui selection dropdown ${open ? 'visible active' : null}`}
                >
                    <i className="dropdown icon"></i>
                    <div className="text">{selected.label}</div>
                    <div className={`menu transition ${open ? 'visible' : null}`}>{renderedOptions}</div>
                </div>
            </div>
        </div>
    )
}

export default Dropdown
