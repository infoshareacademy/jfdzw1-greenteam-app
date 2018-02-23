import React from 'react';
import {Row, Col} from 'react-bootstrap';

const UserAccount = (props) => {
    console.log(props);

    return (
        <Row>
            <Col xs={12}>
                <p>Login: <b>{props.login}</b></p>
                <p>Email: <b>{props.email}</b></p>
                <p>Gender: <b>{props.gender}</b></p>
            </Col>
        </Row>
    )
};

export default UserAccount;


