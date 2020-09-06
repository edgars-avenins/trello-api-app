import React from 'react'
import { Link } from 'react-router-dom'

export default function Board({board, chooseList}) {

    const renderList = (listItem) => {
        return (
            <p key={listItem.id} onClick={() => chooseList(listItem.id)}>
                <Link to='/board/list'>
                    {listItem.name}
                </Link>
            </p>
        )
    }

    return (
        board.map(renderList)
    )
}
