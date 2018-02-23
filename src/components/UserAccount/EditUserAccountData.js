import React from 'react';
import {Row, Form, FormGroup, ControlLabel, Col, FormControl,Radio, Button} from 'react-bootstrap'

const EditUserAccountData = (props) => {

    return (
        <Row>
            <Col xs={12}>
                <p>Login: <b>{props.login}</b></p>
                <Form horizontal>
                    <FormGroup controlId="formHorizontalPassword">
                        <Col componentClass={ControlLabel} sm={3}>
                            Password
                        </Col>
                        <Col sm={8}>
                            <FormControl type="password"  required="true"
                                         inputRef={ref => {
                                             this.password = ref;
                                         }}/>
                        </Col>
                    </FormGroup>
                    <FormGroup controlId="formHorizontalEmail">
                        <Col componentClass={ControlLabel} sm={3}>
                            Email
                        </Col>
                        <Col sm={8}>
                            <FormControl type="email" placeholder={props.email} required="true"
                                         inputRef={ref => {
                                             this.email = ref;
                                         }}/>
                        </Col>
                    </FormGroup>

                    <FormGroup>
                        <Col smOffset={2} sm={10}>
                            <Radio onClick={()=>this.gender="female"} name="gender">Female </Radio>
                            <Radio onClick={()=>this.gender="man"} name="gender">Male</Radio>
                        </Col>
                    </FormGroup>
                    <Col>
                        <button className="saveBtn">Save your changes</button>
                    </Col>
                </Form>
            </Col>
        </Row>
    )
};

export default EditUserAccountData;


