import { useState, useEffect } from "react";
import { Navbar, Nav, NavDropdown, Container } from "react-bootstrap";
import "./CSS/Header.css";
import { Link } from "react-router-dom";
import ProfileMenu from "./ProfileMenu";

function Header() {
    const [isNavOpen, setIsNavOpen] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 960) setIsNavOpen(false);
        };
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const handleNavClose = () => {
        setIsNavOpen(false);
    }

    return (
        <Navbar expand="lg" className={`header`}>
            <Container>
                <div className="text-start col-5">
                    <Navbar.Brand href="/" className="logo">
                        Brew&apos;s of Anarchy
                    </Navbar.Brand>
                </div>
                <div className="col-6 d-flex justify-content-center">
                    <Navbar.Toggle
                        aria-controls="basic-navbar-nav"
                        onClick={() => setIsNavOpen(!isNavOpen)}
                    />
                </div>
                <Navbar.Collapse id="basic-navbar-nav" in={isNavOpen}>
                    <Nav className="me-auto">
                        <Link to="/" className={"nav-link"} onClick={handleNavClose}>Home</Link>
                        <Link to="/about-us" className={"nav-link"} onClick={handleNavClose}>About</Link>
                        <NavDropdown title="Pages" id="basic-nav-dropdown" className={"nav-dropdown"}>
                            <NavDropdown.Item className="nav-link"><Link to={'/our-recipes'} className="nav-link" onClick={handleNavClose}>Our Recipes</Link></NavDropdown.Item>
                            <NavDropdown.Item className="nav-link"><Link to={'/blog'} className="nav-link" onClick={handleNavClose}>Our Blog</Link></NavDropdown.Item>
                            <NavDropdown.Item className="nav-link"><Link to={'/community'} className="nav-link" onClick={handleNavClose}>Our Community</Link></NavDropdown.Item>
                            <NavDropdown.Item className="nav-link"><Link to={'/challenges'} className="nav-link" onClick={handleNavClose}>Coffee Challenges</Link></NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                    <ProfileMenu />
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Header;