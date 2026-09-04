// src/components/Navbar.js
import * as React from "react"
import { Link } from "gatsby"
import "../styles/Navbar.css"

export default function Navbar() {
    const [isOpen, setIsOpen] = React.useState(false)

    return (
        <header className="navbar">
            <div className="navbar-container">
                <div className="logo">
                    <Link to="/">Yellowstone Renovation</Link>
                </div>

                <button
                    className="menu-toggle"
                    onClick={() => setIsOpen(!isOpen)}
                    aria-label="Toggle menu"
                >
                    ☰
                </button>

                <nav className={`nav-links ${isOpen ? "open" : ""}`}>
                    <Link to="/" activeClassName="active">Home</Link>
                    <Link to="/about" activeClassName="active">About</Link>
                    <Link to="/projects" activeClassName="active">Projects</Link>
                    <Link to="/contact" activeClassName="active">Contact</Link>
                </nav>
            </div>
        </header>
    )
}
