import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, Container } from 'react-bootstrap';
export default function Navigation() {
    const nameString = `{ mkalik: 'Malik Kouyate' }`;

    return (
        <div style={{ margin: '15px' }}>
            {/* <header>mkalik portfolio</header> */}
            <Navbar expand="lg">
                <Container fluid>
                    {/* <Navbar.Toggle aria-controls="responsive-navbar-nav" /> */}
                    <Navbar.Brand
                        as={Link}
                        to="/About"
                        style={{
                            marginRight: '40vw',
                            marginLeft: '10vw',
                            marginBottom: '0px',
                            fontSize: '25px',
                        }}
                    >
                        {nameString}
                    </Navbar.Brand>
                    <Nav
                        className="justify-content-end flex-grow-1"
                        defaultActiveKey="1"
                        variant="pills"
                        navbarScroll
                        justify
                    >
                        <Nav.Item>
                            <Nav.Link eventKey="1" as={Link} to="/About">
                                About
                            </Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="2" as={Link} to="/Portfolio">
                                Portfolio
                            </Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="3" as={Link} to="/Contact">
                                Contact
                            </Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="4" as={Link} to="/Resume">
                                Resume
                            </Nav.Link>
                        </Nav.Item>
                    </Nav>
                </Container>
            </Navbar>
        </div>
    );
}
