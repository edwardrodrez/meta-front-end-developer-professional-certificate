import React from 'react'

export default function NavItem({ href, role, children }) {
    return (
        <a href={href} role={role}>{children}</a>
    )
}
