

import React, { useState } from 'react'
import "./Navbar.css"
import { useLocation, useNavigate } from 'react-router-dom';
import logo from "../../assets/Logo.svg"
import NavItem from './NavItem'


export default function Navbar() {
    const navigate = useNavigate();
    const location = useLocation();
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const handleLogo = () => {
        navigate("/");
    };

    const menuItems = [
        { id: 1, label: "Home", link: "/" },
        { id: 2, label: "About", link: "/about" },
        { id: 3, label: "Menu", link: "/menu" },
        { id: 4, label: "Reservations", link: "/reservations" },
        { id: 5, label: "Order Online", link: "/orders" },
        { id: 6, label: "Login", link: "/login" }
    ];

    return (
        <header>
            <div className="logo">
                <img src={logo} alt="logo" height={50} onClick={handleLogo} />
            </div>
            <nav className={`nav ${isMenuOpen ? "open" : ""}`}>
                <ul className={`menu-wrap ${isMenuOpen ? "open" : ""}`}>
                    {menuItems.map(item => (
                        <li key={item.id} className={location.pathname === item.link ? "active" : ""}>
                            <NavItem href={item.link}>{item.label}</NavItem>
                        </li>
                    ))}
                </ul>
            </nav>
            <div className="menu-toggle" onClick={toggleMenu}>
                <div className={`hamburger ${isMenuOpen ? "open" : ""}`}>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>
        </header>

    )
}
