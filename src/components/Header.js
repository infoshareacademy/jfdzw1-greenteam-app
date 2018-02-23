import React, {Component} from "react";
import { Navbar, Nav,NavItem, Label} from "react-bootstrap";
import {LinkContainer} from "react-router-bootstrap"

import {connect} from 'react-redux';

class Header extends Component {

    handleLogOut = () => {
        this.props.logOut();
    };

    render () {
        return (
            <Navbar collapseOnSelect>
                <Navbar.Header>
                    <Navbar.Brand>Outfits by weather</Navbar.Brand>
                    <Navbar.Toggle/>
                </Navbar.Header>

                <Navbar.Collapse>
                    <Nav>
                        {!this.props.user.isLoged ?
                            <LinkContainer exact to={"/login"}>
                                <NavItem>Log in</NavItem>
                            </LinkContainer>
                            :
                            null
                        }

                        {this.props.user.isLoged ?
                            <LinkContainer to={"/inspiration"}>
                                <NavItem>
                                    Inspirations
                                </NavItem>
                            </LinkContainer>
                            :
                            null
                        }

                        {this.props.user.isLoged ?
                            <LinkContainer to={"/favorites"}>
                                <NavItem>Favorites
                                    {!this.props.user.isSaved ?
                                        <Label>Save your's favorites</Label>
                                        :
                                        null
                                    }
                                </NavItem>

                            </LinkContainer>
                            :
                            null
                        }

                    </Nav>
                    <Nav pullRight>
                        {this.props.user.isLoged ?
                            <LinkContainer to={'/account'}>
                                <NavItem >
                                    Account
                                </NavItem>
                            </LinkContainer>
                            :
                            null
                        }

                        {this.props.user.isLoged ?
                            <LinkContainer to={"/login"}>
                                <NavItem onClick={this.handleLogOut}>
                                    Log out
                                </NavItem>
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

const mapStateDispatchToProps = (dispatch) => {
    return {
        logOut: () => dispatch({
            type: "LOG_OUT"
        })
    }
};

const connectedItems = connect(mapStateToProps,mapStateDispatchToProps)(Header);

export {connectedItems as Header};
