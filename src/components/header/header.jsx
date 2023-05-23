/* eslint-disable */
import React, { useState } from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import { Container, NavbarBrand, Navbar, Nav, NavItem, NavbarToggler, Collapse } from 'reactstrap';
import src from '../../assets/images/logos/logo3.png'


const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    /*--------------------------------------------------------------------------------*/
    /*To open NAVBAR in MOBILE VIEW                                                   */
    /*--------------------------------------------------------------------------------*/

    return (
        <div className="topbar" id="top">
            <div className="header6" >
                <Container className="po-relative">
                    <Navbar className="navbar-expand-lg h6-nav-bar">
                        <NavbarToggler onClick={toggle}><span className="ti-menu"></span></NavbarToggler>
                        <Collapse isOpen={isOpen} navbar className="hover-dropdown font-14 ml-auto" id="h6-info">
                            <Nav navbar className="ml-auto">
                            <NavItem>
                                    <a href="https://www.rehamo.com/">
                                       <img style={{width: "150px", marginRight: "500px", marginTop: "15px"}} src={src}/>
									</a>
                                </NavItem>
                                <NavItem>
                                    <Link className="nav-link" to={"/"}>
                                        Home
									</Link>
                                </NavItem>
                                <NavItem>
                                    <Link className="nav-link" to={"/products"}>
                                        Products
                                    </Link>
                                </NavItem>
                                <NavItem>
                                    <Link className="nav-link" to={"/contact"}>
                                        Contact Us
                                    </Link>
                                </NavItem>
                            </Nav>
                        </Collapse>
                    </Navbar>
                </Container>
            </div>
        </div>
    );

}
export default Header;
