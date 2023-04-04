import React from 'react'

interface Props {
    cartItemsCount: number
}

export default function NavBar({ cartItemsCount }: Props) {
    return (
        <div>NavBar {cartItemsCount}</div>
    )
}
