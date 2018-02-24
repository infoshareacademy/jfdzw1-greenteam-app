import React from 'react';
import {Col, Row} from 'react-bootstrap';

const UserAccount = (props) => {

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