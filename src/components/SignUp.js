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

   handleSubmit = (event) => {
       event.preventDefault();
       alert('Submitted!');
   }


render()
{
    return (
        <div>
            <h2>Sign Up</h2>
            <Form horizontal onSubmit={this.handleSubmit}>

                <FormGroup controlId="formHorizontalEmail">
                    <Col componentClass={ControlLabel} sm={2}>
                        Email
                    </Col>
                    <Col sm={4}>
                        <FormControl type="email" placeholder="Email" required="true"
                                     inputRef={ref => { this.email= ref; }}/>
                    </Col>
                </FormGroup>
                <FormGroup controlId="formBasicText">
                    <Col componentClass={ControlLabel} sm={2}>
                        Login
                    </Col>
                    <Col sm={4}>
                        <FormControl type="text" placeholder="Name" required="true"
                                     inputRef={ref => { this.login= ref; }}/>
                    </Col>
                </FormGroup>
                <FormGroup controlId="formHorizontalPassword">
                    <Col componentClass={ControlLabel} sm={2}>
                        Password
                    </Col>
                    <Col sm={4}>
                        <FormControl type="password" placeholder="Password" required="true"
                                     inputRef={ref => { this.password = ref; }}/>
                    </Col>
                </FormGroup>

                <FormGroup>
                    <Col smOffset={2} sm={10} inputRef={ref => { this.gender = ref; }} >
                        <Checkbox>Female </Checkbox>
                        <Checkbox>Male</Checkbox>
                    </Col>
                </FormGroup>
                <FormGroup>
                    <Col smOffset={2} sm={10}>
                        <Button type="submit" value="send" >Sign in</Button>
                    </Col>
                </FormGroup>
            </Form>
            </div>
    );
}

}
export default SignUp;