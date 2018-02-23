import React from 'react';
import {Row, Form, FormGroup, ControlLabel, Col, FormControl,Radio, Button} from 'react-bootstrap'

const EditUserAccountData = (props) => {

    return (
        <Row>
            <Col xs={12}>
                <Form horizontal>
                    <FormGroup controlId="formBasicText">
                        <Col componentClass={ControlLabel} sm={2}>
                            Login
                        </Col>
                        <Col sm={8}>
                            <FormControl type="text" placeholder={props.login} required="true"
                                         inputRef={ref => {
                                             this.login = ref;
                                         }}/>
                        </Col>
                    </FormGroup>

                    <FormGroup controlId="formHorizontalEmail">
                        <Col componentClass={ControlLabel} sm={2}>
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
                </Form>
            </Col>
        </Row>
    )
};

export default EditUserAccountData;


