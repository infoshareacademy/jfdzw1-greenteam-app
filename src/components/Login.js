import React, {Component} from 'react';
import {Button, Col, ControlLabel, Form, FormControl, FormGroup} from 'react-bootstrap';
import {connect} from 'react-redux';
import {withRouter} from 'react-router';
import {NavLink} from 'react-router-dom';
import * as actions from '../reducers/actions/actions';
import * as appConsts from '../consts';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      login: '',
      password: ''
    };
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.register(this.register);
  };

  register = () => {
    const dataLogin = {
      login: this.login.value,
      password: this.password.value
    };

    return (dispatch) => {
      dispatch({type: actions.PENDING_LOGIN});

      fetch(`${appConsts.API_URL}/user/authenticate2`, {
        method: 'POST',
        body: JSON.stringify(dataLogin),
        headers: new Headers({
          'Content-Type': 'application/json'
        })
      }).then(rsp => rsp.json()).then(data => {
        dispatch({type: actions.SUCCESS_LOGIN, userData: data});

        if (data.login == dataLogin.login) {
          this.props.history.push('/inspiration');
        }
      }).catch(err => {
        dispatch({type: actions.ERROR_LOGIN});
      });
    };
  };

  render() {
    return (
      <div>
        <h2>Sign Up</h2>
        <Form horizontal onSubmit={this.handleSubmit}>
          <FormGroup controlId='formBasicText'>
            <Col componentClass={ControlLabel} sm={2}>
              Login
            </Col>
            <Col sm={4}>
              <FormControl type='text' placeholder='Name' required='true'
                           inputRef={ref => this.login = ref}/>
            </Col>
          </FormGroup>
          <FormGroup controlId='formHorizontalPassword'>
            <Col componentClass={ControlLabel} sm={2}>
              Password
            </Col>
            <Col sm={4}>
              <FormControl type='password' placeholder='Password' required='true'
                           inputRef={ref => this.password = ref}/>
            </Col>
          </FormGroup>
          <FormGroup>
            <Col smOffset={2} sm={10}>
              <Button type='submit'>Log in</Button>
            </Col>
          </FormGroup>
        </Form>
        <NavLink exact to='/register' activeClassName='bg-success'>
          Register
        </NavLink>
        {this.props.isLoged === false
          ? <p>Wrong password or login</p>
          : null}
      </div>
    );
  }
}

const mapStateDispatchToProps = (dispatch) => {
  return {
    register: (reg) => dispatch(reg())
  };
};

const mapStateToProps = (state) => {
  return {
    isLoged: state.login.isLoged
  };
};

const connectedLogin = connect(mapStateToProps, mapStateDispatchToProps)(withRouter(Login));

export {connectedLogin as Login}