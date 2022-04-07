// import React, { useEffect } from 'react';
// import { Link } from 'react-router-dom';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import { FaInstagram, FaYoutube, FaDiscord, FaTwitter } from 'react-icons/fa';

const Header = () => {
    return (
        <Navbar collapseOnSelect expand="lg" variant="dark" className="header">
            <Navbar.Brand href="#home"><img src='assets/img/HexaFinity.png' alt='Logo' width="150px" className="header-image"></img></Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="ms-auto nav-pos">
                    <NavDropdown title="ABOUT" id="collasible-nav-dropdown" className="navlink-pos">
                        <NavDropdown.Item href="#mayc">MAYC</NavDropdown.Item>
                        <NavDropdown.Item href="#kennel_club">KENNEL CLUB</NavDropdown.Item>
                        <NavDropdown.Item href="#merch">MERCH</NavDropdown.Item>
                    </NavDropdown>
                    <NavDropdown title="COMMUNITY" id="collasible-nav-dropdown" className="navlink-pos">
                        <NavDropdown.Item href="#mayc">MAYC</NavDropdown.Item>
                        <NavDropdown.Item href="#kennel_club">KENNEL CLUB</NavDropdown.Item>
                        <NavDropdown.Item href="#merch">MERCH</NavDropdown.Item>
                    </NavDropdown>
                    <Nav.Link href="#dao" className="navlink-pos">DAO</Nav.Link>
                    <Nav.Link href="#incubator" className="navlink-pos">INCUBATOR</Nav.Link>
                    <Nav.Link href="#academy" className="navlink-pos">ACADEMY</Nav.Link>
                    <Nav.Link href="#job" className="navlink-pos">JOB</Nav.Link>
                    <Nav.Link href="#job" className="navlink-pos"><div className="swap-button">WoofSwap</div></Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default Header;