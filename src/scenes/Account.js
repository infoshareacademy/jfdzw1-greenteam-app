import React, {Component} from 'react';
import {Button, Col, Row} from 'react-bootstrap';
import {connect} from 'react-redux';
import UserAccount from '../components/UserAccount/UserAccount';
import {EditUserAccountData} from '../components/UserAccount/EditUserAccountData';
import * as actions from '../reducers/actions/actions';
import * as appConsts from '../consts';

class Account extends Component {

  constructor(props) {
    super(props);
    this.state = {
      editMode: false
    };
  }

  handleClickEditMode = () => {
    this.setState({editMode: true});
  };

  handleClickDiscardEditMode = () => {
    this.setState({editMode: false});
  };

  handleClickRemoveAccount = () => {
    this.props.removeAccount(this.removeAccount);
  };

  removeAccount = () => {
    const accountToRemove = {
      login: this.props.user.userData.login,
      password: this.props.user.userData.password
    };

    return (dispatch) => {
      dispatch({type: actions.PENDING_REMOVE_USER});

      fetch(`${appConsts.API_URL}/user`, {
        method: 'DELETE',
        body: JSON.stringify(accountToRemove),
        headers: new Headers({
          'Content-Type': 'application/json'
        })
      }).then(rsp => rsp.json()).then(data => {
        dispatch({type: actions.SUCCESS_REMOVE_USER});
        this.props.history.push('/login');
      }).catch(err => {
        dispatch({type: actions.ERROR_REMOVE_USER});
      });
    };
  };

  handleSaveUserChanges = (event) => {
    event.preventDefault();
    this.props.saveList(this.saveList);
  };

  renderEditMode = () => {
    return (
      <Row>
        <Col xs={4} xsOffset={2}>
          <EditUserAccountData
            login={this.props.user.userData.login}
            email={this.props.user.userData.email}
            gender={this.props.user.userData.gender}
          />
          <Button bsStyle='link' className='removeBtn' onClick={this.handleClickDiscardEditMode}>Discard
            changes</Button>
        </Col>
      </Row>
    );
  };

  renderDisplayMode = () => {
    return (
      <Row>
        <Col xs={4} xsOffset={2}>
          <UserAccount
            login={this.props.user.userData.login}
            email={this.props.user.userData.email}
            gender={this.props.user.userData.gender}
          />
          <Button bsStyle='link' className='removeBtn' onClick={this.handleClickRemoveAccount}>Remove account</Button>
        </Col>
        <Col xs={2}>
          <button className='saveBtn' onClick={this.handleClickEditMode}>Change your data</button>
        </Col>
      </Row>
    );
  };

  render() {
    return (
      <Row className='show-grid'>
        <Col xs={12}>
          <h2>Account</h2>
          <hr/>
          {this.state.editMode
            ? this.renderEditMode()
            : this.renderDisplayMode()}
        </Col>
      </Row>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.login
  }
};

const mapStateDispatchToProps = (dispatch) => {
  return {
    removeAccount: (reg) => dispatch(reg())
  };
};

const connectedItems = connect(mapStateToProps, mapStateDispatchToProps)(Account);

export {connectedItems as Account};
