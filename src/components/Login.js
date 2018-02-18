import React, {Component} from 'react';
import {Form, FormGroup, ControlLabel, Col, FormControl,Radio, Button} from 'react-bootstrap'
import {connect} from 'react-redux';
import { withRouter } from 'react-router'

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
    }

    register = ()=> {

        const dataLogin = {

            login: this.login.value,
            password: this.password.value
        }


        return (dispatch) => {
            dispatch({type: "PENDING"});

            fetch(`http://api.isa-jfdzw1.vipserv.org/greenteam/user/authenticate`, {
                method: 'POST',
                body: JSON.stringify(dataLogin),
                headers: new Headers({
                    'Content-Type': 'application/json'
                })
            }).then(rsp => rsp.json()).then(data => {
                dispatch({
                    type: "SUCCESS",
                    loginAccount: data.response
                });


            }).catch(err => {
                dispatch({type: "ERROR"})
            });
        };
    }

    render(){console.log(this.props)
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
            </div>
        );
    }

}

const mapStateDispatchToProps = (dispatch) => {
    return {
        register:(reg) => dispatch (reg())
    }
}

const connectedLogin = connect (null, mapStateDispatchToProps)(withRouter(Login));

export {connectedLogin as Login}