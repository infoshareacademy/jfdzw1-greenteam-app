import React, {Component} from "react";
import { Navbar, Nav,NavItem} from "react-bootstrap";
import {LinkContainer} from "react-router-bootstrap"

import {connect} from 'react-redux';

class Header extends Component {

render () {

    return (
        <Navbar collapseOnSelect>
            <Navbar.Header>
                <Navbar.Brand>Outfits by weather</Navbar.Brand>
                <Navbar.Toggle/>
            </Navbar.Header>

            <Navbar.Collapse>
                <Nav>
                    <LinkContainer exact to={"/login"}>
                        <NavItem>Log in</NavItem>
                    </LinkContainer>

                    {this.props.user.isLoged ?
                        <LinkContainer to={"/inspiration"}>
                            <NavItem>Inspirations</NavItem>
                        </LinkContainer>
                        :
                        null
                    }

                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}};


const mapStateToProps = (state) => {
    return {
        user: state.login
    }
};

const connectedItems = connect(mapStateToProps)(Header);

export {connectedItems as Header};
