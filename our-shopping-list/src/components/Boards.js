import React from 'react'
import { Link } from 'react-router-dom'

export default function Boards({boards, chooseBoard}) {

    const renderBoards = (board) => {
        return(
            <p key={board.id} onClick={() => chooseBoard(board.id)}>
                <Link to='/board'>
                    {board.name}
                </Link>
            </p>
        )
    }

    return (
        boards.map(renderBoards)
    )
}
