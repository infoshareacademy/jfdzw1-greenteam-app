import React, {Component} from 'react';
import {Col, ControlLabel, Form, FormControl, FormGroup, Radio, Row} from 'react-bootstrap';
import {connect} from 'react-redux';

class EditUserAccountData extends Component {

  handleChangeData = (event) => {
    event.preventDefault();
    this.props.changeData(this.changeData, this.props.user.login);
  };

  changeData = (login) => {
    const userData = {
      login: login,
      email: this.email.value,
      gender: this.gender,
      password: this.password.value
    };

    return (dispatch) => {
      dispatch({type: "PENDING_UPDATE_USER_DATA"});

      fetch(`http://api.isa-jfdzw1.vipserv.org/greenteam/user`, {
        method: 'PUT',
        body: JSON.stringify(userData),
        headers: new Headers({
          'Content-Type': 'application/json'
        })
      }).then(rsp => rsp.json()).then(data => {
        dispatch({
          type: "SUCCESS_UPDATE_USER_DATA",
          userDataUpdated: userData
        });
      }).catch(err => {
        dispatch({type: "ERROR_UPDATE_USER_DATA"})
      });
    };
  };

  render() {
    return (
      <Row>
        <Col xs={12}>
          <p>Login: <b>{this.props.login}</b></p>
          <Form horizontal onSubmit={this.handleChangeData}>
            <FormGroup controlId="formHorizontalPassword">
              <Col componentClass={ControlLabel} sm={3}>
                Password
              </Col>
              <Col sm={8}>
                <FormControl type="password" required="true"
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
                <FormControl type="email" placeholder={this.props.email} required="true"
                             inputRef={ref => {
                               this.email = ref;
                             }}/>
              </Col>
            </FormGroup>

            <FormGroup>
              <Col smOffset={2} sm={10}>
                <Radio onClick={() => this.gender = "female"} name="gender">Female </Radio>
                <Radio onClick={() => this.gender = "man"} name="gender">Male</Radio>
              </Col>
            </FormGroup>
            <Col>
              <button className="saveBtn" type="submit" value="send">Save your changes</button>
            </Col>
          </Form>
        </Col>
      </Row>
    )
  };
}

const mapStateToProps = (state) => {
  return {
    user: state.login.userData
  }
};

const mapStateDispatchToProps = (dispatch) => {
  return {
    changeData: (reg, login) => dispatch(reg(login))
  }
};

const connectedItems = connect(mapStateToProps, mapStateDispatchToProps)(EditUserAccountData);

export {connectedItems as EditUserAccountData};


