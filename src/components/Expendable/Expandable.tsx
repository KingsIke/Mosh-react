import React, { useState } from 'react'
interface Props {
    children: string,
    maxChars?: number
}

export default function Expandable({ children, maxChars = 100 }: Props) {
    const [isExpended, setIsExpended] = useState(false)

    const handleTextChange = () => {
        setIsExpended(!isExpended)
    }


    if (children.length <= maxChars)
        return <p>{children}</p>

    const text = isExpended ? children : children.substring(0, maxChars)
    return (
        <p>

            {text}...
            <button onClick={handleTextChange}>
                {isExpended ? 'less' : 'more'}
            </button>
        </p>
    )
}
