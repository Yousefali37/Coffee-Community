/* eslint-disable no-unused-vars */
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faShoppingCart, faHeart, faUser } from "@fortawesome/free-solid-svg-icons";
import styles from "./Header.module.css";

function Header() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isDarkMode, setIsDarkMode] = useState(false);

    useEffect(() => {
        setIsLoggedIn(!!localStorage.getItem("email"));
    }, []);

    const handleSignOut = () => {
        localStorage.removeItem("email");
        window.location.reload();
    };

    const toggleMenu = () => setIsMenuOpen((prev) => !prev);
    const toggleDarkMode = () => setIsDarkMode((prev) => !prev);

    return (
        <header className={styles.header}>
            <Link to="/" className={styles.logo}>
                <img src="/logo.png" alt="Brand Logo" className={styles.logoImage} />
                <span>Brews of Anarchy</span>
            </Link>

            <nav className={styles.nav}>
                <ul className={styles.navList}>
                    <li><Link to="/">home</Link></li>
                    <li><Link to="/about-us">about</Link></li>
                    <li><Link to="/our-recipes">recipes</Link></li>
                    <li><Link to="/blog">blog</Link></li>
                    <li><Link to="/community">Community</Link></li>
                </ul>
            </nav>

            <div className={styles.icons}>
                <button className={styles.profileBtn} onClick={toggleMenu}>
                    <FontAwesomeIcon icon={faUser} />
                </button>
            </div>

            {isMenuOpen && (
                <div className={styles.dropdownMenu}>
                    <Link to={'/profile'}>My Profile</Link>
                    <Link to="/chatbot">Chat Bot</Link>

                    {/* Icons Row */}
                    <div className={styles.iconsRow}>
                        <Link to="/cart"><FontAwesomeIcon icon={faShoppingCart} /></Link>
                        <Link to="/favorites"><FontAwesomeIcon icon={faHeart} /></Link>
                    </div>

                    {/* Sign In Button */}
                    <Link to="/Auth" className={styles.loginBtn}>Sign In</Link>
                </div>
            )}
        </header>
    );
}

export default Header;
