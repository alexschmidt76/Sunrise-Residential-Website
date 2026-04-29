import { useState } from "react";
import { Container, Navbar, Nav, Button } from "react-bootstrap";
import "../style_sheets/HamburgerMenu.css";

const NavigationBar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <Navbar sticky="top" expand="false">
            <Container fluid className="position-relative d-flex align-items-center px-3" style={{ minHeight: '112px' }}>
                <Navbar.Brand href="/" className="position-absolute">
                    <img
                        src="src/assets/images/Sunrise Residential Logo.jpeg"
                        className="d-inline-block align-top"
                        alt="Sunrise Residential LLC Logo"
                        style={{ width: '320px', height: 'auto' }}
                    />
                </Navbar.Brand>

                <Button 
                    size="lg"
                    type="submit" 
                    href="/contact-us" 
                    className="position-absolute start-50 translate-middle-x"
                >
                    Contact Us
                </Button>
                
                <div className="position-absolute end-0 px-3">
                    <button 
                        className={`hamburger ${isOpen ? 'open' : ''}`}
                        onClick={() => setIsOpen(!isOpen)}
                        type="button"
                        aria-label="Toggle navigation"
                    >
                        <span></span>
                        <span></span>
                        <span></span>
                    </button>
                </div>
                
                {isOpen && (
                    <div className="position-absolute end-0 px-3" style={{ top: '100%' }}>
                        <Nav className="flex-column bg-white border rounded shadow-sm">
                            <Nav.Link href="/contact-us">Contact Us</Nav.Link>
                            <Nav.Link href="/about">About Sunrise Residential</Nav.Link>
                            <Nav.Link href="/photos">Photo Library</Nav.Link>
                            <Nav.Link href="/pricing">Pricing Information</Nav.Link>
                        </Nav>
                    </div>
                )}
                
            </Container>
        </Navbar>
    )
}

export default NavigationBar;