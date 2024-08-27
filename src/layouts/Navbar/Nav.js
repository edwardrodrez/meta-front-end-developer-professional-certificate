

import React, { useState } from 'react'
import "./Nav.css"
import { useNavigate } from 'react-router-dom';
import logo from "../../assets/Logo.svg"
import NavItem from './NavItem'


export default function Nav() {
    const navigate = useNavigate();
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const onClickImage = () => {
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
        <header className="topbar">
            <div className="logo">
                <img src={logo} alt="logo" height={50} onClick={onClickImage} />
            </div>
            <nav className={`nav ${isMenuOpen ? "open" : ""}`}>
                <ul className={`menu-list ${isMenuOpen ? "open" : ""}`}>
                    {menuItems.map(item => (
                        <li key={item.id}>
                            <NavItem href={item.link}>{item.label}</NavItem>
                        </li>
                    ))}
                </ul>
            </nav>
            <div className="menu-toggle" onClick={toggleMenu}>
                <img src={""} alt="menu-icon" />
            </div>
        </header>

    )
}
