import React, {Component} from 'react';
import {Form, FormGroup, ControlLabel, Col, FormControl, Button} from 'react-bootstrap'
import {connect} from 'react-redux';
import { withRouter } from 'react-router'
import { NavLink } from "react-router-dom";

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            login: '',
            password: '',

        }
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.props.register(this.register);
    };

    register = ()=> {

        const dataLogin = {

            login: this.login.value,
            password: this.password.value
        };


        return (dispatch) => {
            dispatch({type: "PENDING_LOGIN"});

            fetch(`http://api.isa-jfdzw1.vipserv.org/greenteam/user/authenticate2`, {
                method: 'POST',
                body: JSON.stringify(dataLogin),
                headers: new Headers({
                    'Content-Type': 'application/json'
                })
            }).then(rsp => rsp.json()).then(data => {
                dispatch({
                    type: "SUCCESS_LOGIN",
                    isLoged: true,
                    userData: data
                });

                if (data.login == dataLogin.login) {

                    this.props.history.push('/inspiration')
                }

            }).catch(err => {
                dispatch({type: "ERROR_LOGIN"})
            });
        };
    }

    render(){
        return (
            <div>
                <h2>Sign Up</h2>
                <Form horizontal onSubmit={this.handleSubmit}>

                    <FormGroup controlId="formBasicText">
                        <Col componentClass={ControlLabel} sm={2}>
                            Login
                        </Col>
                        <Col sm={4}>
                            <FormControl type="text" placeholder="Name" required="true"
                                         inputRef={ref => {
                                             this.login = ref;
                                         }}/>
                        </Col>
                    </FormGroup>
                    <FormGroup controlId="formHorizontalPassword">
                        <Col componentClass={ControlLabel} sm={2}>
                            Password
                        </Col>
                        <Col sm={4}>
                            <FormControl type="password" placeholder="Password" required="true"
                                         inputRef={ref => {
                                             this.password = ref;
                                         }}/>
                        </Col>
                    </FormGroup>


                    <FormGroup>
                        <Col smOffset={2} sm={10}>
                            <Button type="submit" value="send">Log in</Button>
                        </Col>
                    </FormGroup>
                </Form>
                <NavLink exact to={"/register"} activeClassName="bg-success">
                    Register
                </NavLink>
                {this.props.isLoged === false ?<p>Wrong password or login</p> : null}
            </div>
        );
    }

}

const mapStateDispatchToProps = (dispatch) => {
    return {
        register:(reg) => dispatch (reg())
    }
}

const mapStateToProps = (state) => {
    return {
        isLoged:state.login.isLoged
    }
}

const connectedLogin = connect (mapStateToProps, mapStateDispatchToProps)(withRouter(Login));

export {connectedLogin as Login}