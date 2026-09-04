import React, { useState } from "react";
import { Link } from "gatsby";
import { useLocation } from "@reach/router";
import "../styles/Header.css";

export default function Header() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [openDropdown, setOpenDropdown] = useState(null);
    const location = useLocation();

    const toggleDropdown = (name) => {
        setOpenDropdown(openDropdown === name ? null : name);
    };

    const closeMenu = () => {
        setMenuOpen(false);
        setOpenDropdown(null);
    };

    const normalizePath = (url = "") => {
        if (!url) return "/";
        const cleaned = url.split("?")[0].split("#")[0];
        return cleaned.replace(/\/+$/, "") || "/";
    };

    const currentPath = normalizePath(location.pathname);

    const isActivePage = (path) => {
        const target = normalizePath(path);

        if (target === "/") {
            return currentPath === "/";
        }

        return currentPath === target || currentPath.startsWith(`${target}/`);
    };

    const isSectionActive = (paths) => {
        return paths.some((path) => isActivePage(path));
    };

    return (
        <header className="header">
            <div className="header-top">
                <div className="header-container">
                    <Link to="/" className="logo">
                        <img
                            src="/images/yellowstone-back-logo.png"
                            alt="Yellowstone Renovation"
                        />
                        <div className="logo-text">
                            <p className="title">Your #1 Home Improvement Experts</p>
                            <p className="subtitle">Serving Lexington & Surrounding Areas</p>
                        </div>
                    </Link>

                    <div className="header-right">
                        <a href="tel:8597657267" className="phone">
                            (859) 765-7267
                        </a>

                        <Link to="/contact" className="btn-estimate">
                            Free Estimate
                        </Link>

                        <div className="mobile-icons">
                            <a href="tel:8597657267" className="icon-btn" aria-label="Call">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="22"
                                    height="22"
                                    fill="none"
                                    stroke="white"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    viewBox="0 0 24 24"
                                >
                                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2A19.8 19.8 0 0 1 3 5.18 2 2 0 0 1 5 3h3a2 2 0 0 1 2 1.72c.09.66.22 1.31.38 1.94l.12.5a2 2 0 0 1-.45 1.82l-1.5 1.5a16 16 0 0 0 6.88 6.88l1.5-1.5a2 2 0 0 1 1.82-.45l.5.12c.63.16 1.28.29 1.94.38A2 2 0 0 1 22 16.92z" />
                                </svg>
                            </a>

                            <button
                                className="icon-btn"
                                onClick={() => setMenuOpen(true)}
                                aria-label="Open Menu"
                                type="button"
                            >
                                <span className="burger-lines"></span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <nav className="nav-bar desktop-nav">
                <ul>
                    <li>
                        <Link to="/" activeClassName="active">
                            Home
                        </Link>
                    </li>

                    <li className="dropdown">
                        <Link to="/about" className="dropbtn" activeClassName="active">
                            About
                        </Link>
                        <ul className="dropdown-content">
                            <li>
                                <Link to="/offers">Offer</Link>
                            </li>
                        </ul>
                    </li>

                    <li className="dropdown">
                        <Link
                            to="/siding-replacement"
                            className="dropbtn"
                            activeClassName="active"
                        >
                            Siding
                        </Link>
                        <ul className="dropdown-content">
                            <li>
                                <Link to="/siding-lexington">Siding Installer</Link>
                            </li>
                            <li>
                                <Link to="/james-hardie-siding">James Hardie Siding</Link>
                            </li>
                            <li>
                                <Link to="/vinyl-siding">Vinyl Siding</Link>
                            </li>
                            <li>
                                <Link to="/fiber-cement-siding">Fiber Cement Siding</Link>
                            </li>
                            <li>
                                <Link to="/wood-siding">Wood Siding</Link>
                            </li>
                            <li>
                                <Link to="/metal-siding">Metal Siding</Link>
                            </li>
                        </ul>
                    </li>

                    <li className="dropdown">
                        <Link to="/decking" className="dropbtn" activeClassName="active">
                            Decks
                        </Link>
                        <ul className="dropdown-content">
                            <li>
                                <Link to="/wood-decks">Wood Decks</Link>
                            </li>
                            <li>
                                <Link to="/composite-decks">Composite Decks</Link>
                            </li>
                            <li>
                                <Link to="/covered-decks">Covered Decks</Link>
                            </li>
                            <li>
                                <Link to="/custom-decks">Custom Decks</Link>
                            </li>
                            <li>
                                <Link to="/outdoor-deck">Outdoor Deck</Link>
                            </li>
                        </ul>
                    </li>

                    <li>
                        <Link to="/windows" activeClassName="active">
                            Windows
                        </Link>
                    </li>
                    <li>
                        <Link to="/painting" activeClassName="active">
                            Painting
                        </Link>
                    </li>
                    <li>
                        <Link to="/projects-showcase" activeClassName="active">
                            Projects
                        </Link>
                    </li>
                    <li>
                        <Link to="/contact" activeClassName="active">
                            Contact
                        </Link>
                    </li>
                    <li>
                        <Link to="/blog" activeClassName="active">
                            Blog
                        </Link>
                    </li>
                </ul>
            </nav>

            <div
                className={`mobile-menu-overlay ${menuOpen ? "show" : ""}`}
                onClick={closeMenu}
            >
                <div
                    className={`mobile-menu-panel ${menuOpen ? "show" : ""}`}
                    onClick={(e) => e.stopPropagation()}
                >
                    <div className="mobile-menu-top">
                        <Link to="/" className="mobile-menu-logo" onClick={closeMenu}>
                            <img
                                src="/images/yellowstone-back-logo.png"
                                alt="Yellowstone Renovation"
                            />
                        </Link>

                        <button
                            className="mobile-close-btn"
                            onClick={closeMenu}
                            aria-label="Close Menu"
                            type="button"
                        >
                            ×
                        </button>
                    </div>

                    <div className="mobile-menu-links">
                        <Link
                            to="/"
                            onClick={closeMenu}
                            className={isActivePage("/") ? "active-mobile-link" : ""}
                        >
                            Home
                        </Link>

                        <div className="mobile-dropdown">
                            <button
                                className={`mobile-dropdown-toggle ${isSectionActive(["/about", "/offers"])
                                        ? "active-mobile-link"
                                        : ""
                                    }`}
                                onClick={() => toggleDropdown("about")}
                                type="button"
                            >
                                <span>About</span>
                                <span
                                    className={`mobile-arrow ${openDropdown === "about" ? "open" : ""
                                        }`}
                                >
                                    ▾
                                </span>
                            </button>

                            <div
                                className={`mobile-dropdown-content ${openDropdown === "about" ? "open" : ""
                                    }`}
                            >
                                <Link
                                    to="/about"
                                    onClick={closeMenu}
                                    className={isActivePage("/about") ? "active-mobile-sublink" : ""}
                                >
                                    About Us
                                </Link>
                                <Link
                                    to="/offers"
                                    onClick={closeMenu}
                                    className={isActivePage("/offers") ? "active-mobile-sublink" : ""}
                                >
                                    Offer
                                </Link>
                            </div>
                        </div>

                        <div className="mobile-dropdown">
                            <button
                                className={`mobile-dropdown-toggle ${isSectionActive([
                                    "/siding-replacement",
                                    "/siding-lexington",
                                    "/james-hardie-siding",
                                    "/vinyl-siding",
                                    "/fiber-cement-siding",
                                    "/wood-siding",
                                    "/metal-siding",
                                ])
                                        ? "active-mobile-link"
                                        : ""
                                    }`}
                                onClick={() => toggleDropdown("siding")}
                                type="button"
                            >
                                <span>Siding</span>
                                <span
                                    className={`mobile-arrow ${openDropdown === "siding" ? "open" : ""
                                        }`}
                                >
                                    ▾
                                </span>
                            </button>

                            <div
                                className={`mobile-dropdown-content ${openDropdown === "siding" ? "open" : ""
                                    }`}
                            >
                                <Link
                                    to="/siding-replacement"
                                    onClick={closeMenu}
                                    className={isActivePage("/siding-replacement") ? "active-mobile-sublink" : ""}
                                >
                                    Siding
                                </Link>
                                <Link
                                    to="/siding-lexington"
                                    onClick={closeMenu}
                                    className={isActivePage("/siding-lexington") ? "active-mobile-sublink" : ""}
                                >
                                    Siding Installer
                                </Link>
                                <Link
                                    to="/james-hardie-siding"
                                    onClick={closeMenu}
                                    className={isActivePage("/james-hardie-siding") ? "active-mobile-sublink" : ""}
                                >
                                    James Hardie Siding
                                </Link>
                                <Link
                                    to="/vinyl-siding"
                                    onClick={closeMenu}
                                    className={isActivePage("/vinyl-siding") ? "active-mobile-sublink" : ""}
                                >
                                    Vinyl Siding
                                </Link>
                                <Link
                                    to="/fiber-cement-siding"
                                    onClick={closeMenu}
                                    className={isActivePage("/fiber-cement-siding") ? "active-mobile-sublink" : ""}
                                >
                                    Fiber Cement Siding
                                </Link>
                                <Link
                                    to="/wood-siding"
                                    onClick={closeMenu}
                                    className={isActivePage("/wood-siding") ? "active-mobile-sublink" : ""}
                                >
                                    Wood Siding
                                </Link>
                                <Link
                                    to="/metal-siding"
                                    onClick={closeMenu}
                                    className={isActivePage("/metal-siding") ? "active-mobile-sublink" : ""}
                                >
                                    Metal Siding
                                </Link>
                            </div>
                        </div>

                        <div className="mobile-dropdown">
                            <button
                                className={`mobile-dropdown-toggle ${isSectionActive([
                                    "/decking",
                                    "/wood-decks",
                                    "/composite-decks",
                                    "/covered-decks",
                                    "/custom-decks",
                                    "/outdoor-deck",
                                ])
                                        ? "active-mobile-link"
                                        : ""
                                    }`}
                                onClick={() => toggleDropdown("decks")}
                                type="button"
                            >
                                <span>Decks</span>
                                <span
                                    className={`mobile-arrow ${openDropdown === "decks" ? "open" : ""
                                        }`}
                                >
                                    ▾
                                </span>
                            </button>

                            <div
                                className={`mobile-dropdown-content ${openDropdown === "decks" ? "open" : ""
                                    }`}
                            >
                                <Link
                                    to="/decking"
                                    onClick={closeMenu}
                                    className={isActivePage("/decking") ? "active-mobile-sublink" : ""}
                                >
                                    Decking
                                </Link>
                                <Link
                                    to="/wood-decks"
                                    onClick={closeMenu}
                                    className={isActivePage("/wood-decks") ? "active-mobile-sublink" : ""}
                                >
                                    Wood Decks
                                </Link>
                                <Link
                                    to="/composite-decks"
                                    onClick={closeMenu}
                                    className={isActivePage("/composite-decks") ? "active-mobile-sublink" : ""}
                                >
                                    Composite Decks
                                </Link>
                                <Link
                                    to="/covered-decks"
                                    onClick={closeMenu}
                                    className={isActivePage("/covered-decks") ? "active-mobile-sublink" : ""}
                                >
                                    Covered Decks
                                </Link>
                                <Link
                                    to="/custom-decks"
                                    onClick={closeMenu}
                                    className={isActivePage("/custom-decks") ? "active-mobile-sublink" : ""}
                                >
                                    Custom Decks
                                </Link>
                                <Link
                                    to="/outdoor-deck"
                                    onClick={closeMenu}
                                    className={isActivePage("/outdoor-deck") ? "active-mobile-sublink" : ""}
                                >
                                    Outdoor Deck
                                </Link>
                            </div>
                        </div>

                        <Link
                            to="/windows"
                            onClick={closeMenu}
                            className={isActivePage("/windows") ? "active-mobile-link" : ""}
                        >
                            Windows
                        </Link>

                        <Link
                            to="/painting"
                            onClick={closeMenu}
                            className={isActivePage("/painting") ? "active-mobile-link" : ""}
                        >
                            Painting
                        </Link>

                        <Link
                            to="/projects-showcase"
                            onClick={closeMenu}
                            className={isActivePage("/projects-showcase") ? "active-mobile-link" : ""}
                        >
                            Projects
                        </Link>

                        <Link
                            to="/contact"
                            onClick={closeMenu}
                            className={isActivePage("/contact") ? "active-mobile-link" : ""}
                        >
                            Contact
                        </Link>

                        <Link
                            to="/blog"
                            onClick={closeMenu}
                            className={isActivePage("/blog") ? "active-mobile-link" : ""}
                        >
                            Blog
                        </Link>
                    </div>
                </div>
            </div>
        </header>
    );
}