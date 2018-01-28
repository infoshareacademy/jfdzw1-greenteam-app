import React from "react";
import { Navbar, NavItem, MenuItem, Nav, NavDropdown, Badge } from "react-bootstrap";
import { Link } from "react-router-dom";
import {LinkContainer} from "react-router-bootstrap"
import ListOfClothesItems from "./ListOfClothesItems";

const Header = () => (
    <Navbar collapseOnSelect>
        <Navbar.Header>
            <Navbar.Brand>Outfits by weather</Navbar.Brand>
            <Navbar.Toggle />
        </Navbar.Header>

        <Navbar.Collapse>
            <Nav>
                <LinkContainer exact to={"/"}>
                    <NavItem>Log in</NavItem>
                </LinkContainer>

                <LinkContainer to={"/inspiration"}>
                    <NavItem>Inspirations</NavItem>
                </LinkContainer>

            </Nav>
        </Navbar.Collapse>
    </Navbar>
);

export default Header;