import React from 'react'

const NavItem = ({ href, children }) => {
    return (
        <a href={href}>{children}</a>
    )
}

export default NavItem