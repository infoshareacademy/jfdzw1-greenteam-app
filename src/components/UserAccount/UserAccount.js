import React from 'react';
import {Row, Col} from 'react-bootstrap';

const UserAccount = (props) => {

    return (
        <Row>
            <Col xs={8} xsOffset={2}>
                <p>Login:</p>
                <p>Email:</p>
                <p>Gender:</p>
            </Col>
        </Row>
    )
};

export default UserAccount;


