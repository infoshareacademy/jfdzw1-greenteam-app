import React, {Component} from 'react';
import {Form, FormGroup,ControlLabel, Col, FormControl,Checkbox, Button} from 'react-bootstrap'



class SignUp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            login: '',
            password: '',
            gender: ''
        }
    }

render()
{
    return (
        <div>
            <h2>Sign Up</h2>
            <Form horizontal>

                <FormGroup controlId="formHorizontalEmail">
                    <Col componentClass={ControlLabel} sm={2}>
                        Email
                    </Col>
                    <Col sm={4}>
                        <FormControl type="email" placeholder="Email"
                                     onChange = {event => this.setState({email: event.target.value})}/>
                    </Col>
                </FormGroup>
                <FormGroup controlId="formBasicText">
                    <Col componentClass={ControlLabel} sm={2}>
                        Login
                    </Col>
                    <Col sm={4}>
                        <FormControl type="text" placeholder="Name"
                                     onChange = {event => this.setState({login: event.target.value})}/>
                    </Col>
                </FormGroup>
                <FormGroup controlId="formHorizontalPassword">
                    <Col componentClass={ControlLabel} sm={2}>
                        Password
                    </Col>
                    <Col sm={4}>
                        <FormControl type="password" placeholder="Password"
                                     onChange = {event => this.setState({password: event.target.value})}/>
                    </Col>
                </FormGroup>

                <FormGroup>
                    <Col smOffset={2} sm={10}>
                        <Checkbox>Female</Checkbox>
                        <Checkbox>Male</Checkbox>
                    </Col>
                </FormGroup>
                <FormGroup>
                    <Col smOffset={2} sm={10}>
                        <Button type="submit">Sign in</Button>
                    </Col>
                </FormGroup>
            </Form>
            </div>
    );
}

}
export default SignUp;