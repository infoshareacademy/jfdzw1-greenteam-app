import React, { Component } from 'react';
import { Form, FormGroup, ControlLabel, Col, FormControl, Radio, Button } from 'react-bootstrap';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import * as actions from '../reducers/actions/actions';
import * as appConsts from '../consts';

class Register extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            login: '',
            password: '',
            gender: ''
        };
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.props.register(this.register);
    }

    register = () => {
        const dataRegister = {
            email: this.email.value,
            login: this.login.value,
            gender: this.gender,
            password: this.password.value
        };

        return (dispatch) => {
            dispatch({ type: actions.PENDING });

            fetch(`${appConsts.API_URL}/user`, {
                method: 'POST',
                body: JSON.stringify(dataRegister),
                headers: new Headers({
                    'Content-Type': 'application/json'
                })
            }).then(rsp => rsp.json()).then(data => {
                dispatch({ type: actions.SUCCESS, usersCreate: dataRegister });
                this.props.history.push('/login');
            }).catch(err => {
                dispatch({ type: actions.ERROR });
            });
        };
    }

    render() {
        return (
            <div>
                <h2>Sign Up</h2>
                <Form horizontal onSubmit={this.handleSubmit}>
                    <FormGroup controlId='formHorizontalEmail'>
                        <Col componentClass={ControlLabel} sm={2}>
                            Email
                        </Col>
                        <Col sm={4}>
                            <FormControl type='email' placeholder='Email' required='true'
                                inputRef={ref => this.email = ref} />
                        </Col>
                    </FormGroup>
                    <FormGroup controlId='formBasicText'>
                        <Col componentClass={ControlLabel} sm={2}>
                            Login
                        </Col>
                        <Col sm={4}>
                            <FormControl type='text' placeholder='Name' required='true'
                                inputRef={ref => this.login = ref} />
                        </Col>
                    </FormGroup>
                    <FormGroup controlId='formHorizontalPassword'>
                        <Col componentClass={ControlLabel} sm={2}>
                            Password
                        </Col>
                        <Col sm={4}>
                            <FormControl type='password' placeholder='Password' required='true'
                                inputRef={ref => this.password = ref} />
                        </Col>
                    </FormGroup>
                    <FormGroup>
                        <Col smOffset={2} sm={10}>
                            <Radio onClick={() => this.gender = 'female'} name='gender'>Female </Radio>
                            <Radio onClick={() => this.gender = 'man'} name='gender'>Male</Radio>
                        </Col>
                    </FormGroup>
                    <FormGroup>
                        <Col smOffset={2} sm={10}>
                            <Button type='submit'>Sign in</Button>
                        </Col>
                    </FormGroup>
                </Form>
            </div>
        );
    }
}

const mapStateDispatchToProps = (dispatch) => {
    return {
        register: (reg) => dispatch(reg())
    }
};

const connectedRegister = connect(null, mapStateDispatchToProps)(withRouter(Register));

export { connectedRegister as Register }