import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, Container } from 'react-bootstrap';
export default function Navigation() {
    const nameString = `{ mkalik: 'Malik Kouyate' }`;
    return (
        <>
            {/* <header>mkalik portfolio</header> */}
            <Navbar bg="dark" expand="lg">
                <Container fluid>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Brand as={Link} to="/Home">
                        {nameString}
                    </Navbar.Brand>
                    <Nav
                        variant="tabs"
                        className="justify-content-end"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >
                        {/* <Nav variant="tabs" defaultActiveKey="/About"> */}
                        <Nav.Link as={Link} to="/About">
                            About
                        </Nav.Link>
                        <Nav.Link as={Link} to="/Portfolio">
                            Portfolio
                        </Nav.Link>
                        <Nav.Link as={Link} to="/Contact">
                            Contact
                        </Nav.Link>
                        <Nav.Link as={Link} to="/Resume">
                            Resume
                        </Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </>
    );
}
