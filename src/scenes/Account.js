import React, {Component} from 'react';
import {Row, Col, Button} from 'react-bootstrap';
import {connect} from 'react-redux';

import UserAccount from '../components/UserAccount/UserAccount';
import {EditUserAccountData} from '../components/UserAccount/EditUserAccountData'


class Account extends Component {

    handleClickEditMode = () => {
        this.props.editMode();
    };

    handleClickDiscardEditMode = () => {
        this.props.discardEditMode();
    };

    handleClickRemoveAccount = () => {
        this.props.removeAccount(this.removeAccount);
    };

    removeAccount = () => {
        const accountToRemove = {
            login: this.props.user.userData.login,
        };

        return (dispatch) => {
            dispatch({type: "PENDING_REMOVE_USER"});

            fetch(`http://api.isa-jfdzw1.vipserv.org/greenteam/user`, {
                method: 'DELETE',
                body: JSON.stringify(accountToRemove),
                headers: new Headers({
                    'Content-Type': 'application/json'
                })
            }).then(rsp => rsp.json()).then(data => {
                dispatch({
                    type: "SUCCESS_REMOVE_USER",
                });
                this.props.history.push('/login')
            }).catch(err => {
                dispatch({type: "ERROR_REMOVE_USER"})
            });
        };
    };

    handleSaveUserChanges = (event) => {
        event.preventDefault();
        this.props.saveList(this.saveList);
    };

    render() {

        return (

            <Row className="show-grid">
                <Col xs={12}>
                    <h2>Account</h2>
                    <hr/>
                    {!this.props.user.editMode ?
                        <Row>
                            <Col xs={4} xsOffset={2}>
                                <UserAccount
                                    login={this.props.user.userData.login}
                                    email={this.props.user.userData.email}
                                    gender={this.props.user.userData.gender}
                                />
                                <Button bsStyle="link" className="removeBtn" onClick={this.handleClickRemoveAccount}>Remove account</Button>
                            </Col>
                            <Col xs={2}>
                                <button className="saveBtn" onClick={this.handleClickEditMode}>Change your data</button>
                            </Col>
                        </Row>
                        :
                        <Row>
                            <Col xs={4} xsOffset={2}>
                                <EditUserAccountData
                                    login={this.props.user.userData.login}
                                    email={this.props.user.userData.email}
                                    gender={this.props.user.userData.gender}
                                />
                                <Button bsStyle="link" className="removeBtn" onClick={this.handleClickDiscardEditMode}>Discard changes</Button>
                            </Col>
                        </Row>
                    }
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
        editMode: () => dispatch({
            type: "EDIT_MODE",
        }),
        discardEditMode: () => dispatch({
            type: "DISCARD_EDIT_MODE",
        }),
        removeAccount: (reg) => dispatch (reg())
    }
};

const connectedItems = connect(mapStateToProps, mapStateDispatchToProps)(Account);

export {connectedItems as Account};
