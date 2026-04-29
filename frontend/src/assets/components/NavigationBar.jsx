import { Container, Navbar, Nav, Button, NavDropdown } from "react-bootstrap";

const NavigationBar = () => {
    return (
        <Navbar sticky="top" expand="">
            <Container>
                <Navbar.Brand href="/">
                    <img
                        src="./Sunrise Residential Logo"
                        className="d-inline-block align-top"
                        alt="Sunrise Residential LLC Logo"
                    />
                </Navbar.Brand>
                <Button type="submit" href="/contact-us" className="position-absolute start-50 translate-middle-x">Contact Us</Button>
                <Navbar.Toggle aria-controls="main-navbar" />
                <Navbar.Collapse id="main-navbar" className="">
                    <Nav className="justify-content-right">
                        <Nav.Link href="/contact-us">Contact Us</Nav.Link>
                        <Nav.Link href="/about">About Sunrise Residential</Nav.Link>
                        <Nav.Link href="/photos">Photo Library</Nav.Link>
                        <Nav.Link href="/pricing">Pricing Information</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default NavigationBar;