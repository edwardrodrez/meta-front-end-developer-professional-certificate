

import React from 'react'
import "./Nav.css"
import NavItem from './NavItem'

export default function Nav() {
    return (
        <nav>
            <ul>
                <li>
                    <NavItem href="/home" role="link">Homepage</NavItem>
                </li>
                <li>
                    <NavItem href="/about" role="link">About Us</NavItem>
                </li>
            </ul>
        </nav>
    )
}
