import React from 'react'
import { Link } from 'react-router-dom'

export default function Nav() {
    return (
        <ul style={{display: 'flex'}}>
            <li style={{listStyle: 'none', padding: '1rem'}}>
                <Link to='/'>
                    All Boards
                </Link>
            </li>
            <li style={{listStyle: 'none', padding: '1rem'}}>
                <Link to='/board'>
                    Current Board
                </Link>
            </li>
            <li style={{listStyle: 'none', padding: '1rem'}}>
                <Link to='/board/list'>
                    Current List
                </Link>
            </li>
            
        </ul>
    )
}
