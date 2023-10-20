import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-scroll";
import { Link as LinkReact } from "react-router-dom";
import classes from "./TheNavbar.module.css";
import Logo from "../../assets/Logo/Logo.svg";

const TheNavbar = ({ children }) => {
    return (
        <>
            <Navbar
                expand="xl"
                className={`${classes.navbar} fixed-top`}
                data-aos="fade-down"
                data-aos-easing="ease-out"
                data-aos-duration="2000"
            >
                <Navbar.Brand className={classes.navbar_brand}>
                    <LinkReact
                        to="/"
                        spy={true}
                        smooth={true}
                        offset={-50}
                        duration={500}
                    >
                        <img src={Logo} alt="My logo"></img>
                    </LinkReact>
                </Navbar.Brand>
                <Navbar.Toggle
                    aria-controls="basic-navbar-nav"
                    className={classes.toggle}
                />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className={`${classes.nav__linkgroup} ms-auto`}>
                        <Nav.Link
                            className={`${classes.nav__link} ${classes.firstnav__link} me-4`}
                        >
                            <Link
                                activeClass={classes.active}
                                to="hero"
                                spy={true}
                                smooth={true}
                                offset={-50}
                                duration={500}
                            >
                                Home
                            </Link>
                        </Nav.Link>
                        <Nav.Link className={`${classes.nav__link} me-4`}>
                            <Link
                                activeClass={classes.active}
                                to="about"
                                spy={true}
                                smooth={true}
                                offset={-50}
                                duration={500}
                            >
                                About us
                            </Link>
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
            {children}
        </>
    );
    //ENDS
};

export default TheNavbar;
