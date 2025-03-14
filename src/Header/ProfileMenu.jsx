import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import styles from './CSS/ProfileMenu.module.css';

function ProfileMenu() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => setIsOpen((prev) => !prev);

    const handleClick = () => {
        setIsOpen(false);
    }

    return (
        <div className={styles['profile-menu']}>
            <Button variant="" onClick={toggleMenu}>
                <img
                    src={'https://res.cloudinary.com/dtj4jwfs7/image/upload/v1741350407/pixelcut-export_hvmhcx.jpg'}
                    alt="Profile"
                    className={`${styles['profile-img']} rounded-circle`}
                    width="30"
                />
            </Button>

            {isOpen && (
                <div className={styles['profile-dropdown']}>
                    <Link to={'/profile'} onClick={handleClick}>
                        My Profile
                    </Link>
                    {/* <div className="row justify-content-center gap-2 align-items-center">
                        <Link to="/cart" className="col-3 text-center" onClick={handleClick}>

                        </Link>
                        <Link to="/favorites" className="col-3 text-center" onClick={handleClick}>

                        </Link>
                        <Link to="/orders" className="col-3 text-center" onClick={handleClick}>

                        </Link>
                    </div> */}

                    <hr />
                    <Link to="/auth" className="btn loginBtn">
                        Sign In
                    </Link>
                </div>
            )}
        </div>
    );
}

export default ProfileMenu;