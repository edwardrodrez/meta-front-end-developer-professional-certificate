import React from 'react'

export default function NavItem({ href, children }) {
    return (
        <a href={href}>{children}</a>
    )
}
