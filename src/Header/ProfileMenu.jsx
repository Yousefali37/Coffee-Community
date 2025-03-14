import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import styles from './CSS/ProfileMenu.module.css';

function ProfileMenu() {
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef(null);

    // Close dropdown when clicking outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    const toggleMenu = () => setIsOpen((prev) => !prev);

    const handleClick = () => {
        setIsOpen(false);
    }

    return (
        <div className={styles['profile-menu']} ref={dropdownRef}>
            <Button 
                variant="link" 
                onClick={toggleMenu}
                aria-expanded={isOpen}
                aria-label="Profile menu"
                aria-haspopup="true"
                className={styles['profile-button']}
            >
                <img
                    src={'https://res.cloudinary.com/dtj4jwfs7/image/upload/v1741350407/pixelcut-export_hvmhcx.jpg'}
                    alt="Profile"
                    className={`${styles['profile-img']} rounded-circle`}
                    width="40"
                    height="40"
                    loading="lazy"
                />
            </Button>

            {isOpen && (
                <div 
                    className={styles['profile-dropdown']}
                    role="menu"
                >
                    <Link 
                        to={'/profile'} 
                        className={styles['dropdown-link']}
                        onClick={handleClick}
                        role="menuitem"
                    >
                        My Profile
                    </Link>
                    <div className={styles['dropdown-divider']} />
                    <Link 
                        to="/auth" 
                        className={`${styles['dropdown-link']} ${styles['login-button']}`}
                        onClick={handleClick}
                        role="menuitem"
                    >
                        Sign In
                    </Link>
                </div>
            )}
        </div>
    );
}

export default ProfileMenu;