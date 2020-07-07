import React, { useState } from 'react'
import { Item } from './App'

type AccordionProps = {
    items: Item[]
}

const Accordion = ({ items }: AccordionProps): JSX.Element => {
    const [activeIndex, setActiveIndex] = useState<number | null>(null)

    const onTitleClick = (index: number): void => {
        if (index === activeIndex) {
            setActiveIndex(null)
        } else {
            setActiveIndex(index)
        }
    }

    const renderedItems = items.map((item, index) => {
        const active = index === activeIndex ? 'active' : ''

        return (
            <React.Fragment key={item.title}>
                <h3 className={`title ${active}`} onClick={() => onTitleClick(index)}>
                    <i className="dropdown icon"></i>
                    {item.title}
                </h3>
                <div className={`content ${active}`}>
                    <p className="description">{item.content}</p>
                </div>
            </React.Fragment>
        )
    })
    return <div className="ui styled accordion">{renderedItems}</div>
}

export default Accordion
