import React, {Component} from 'react';
import {Row, Col, Button} from 'react-bootstrap';
import {connect} from 'react-redux';

import UserAccount from '../components/UserAccount/UserAccount';
import EditUserAccountData from '../components/UserAccount/EditUserAccountData'


class Account extends Component {

    handleClickEditMode = () => {
        this.props.editMode();
    };

    handleClickDiscardEditMode = () => {
        this.props.discardEditMode();
    }

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
                                <Button bsStyle="link" className="removeBtn">Remove account</Button>
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
                            <Col xs={2}>
                                <button className="saveBtn">Save your changes</button>
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
        })
    }
};

const connectedItems = connect(mapStateToProps, mapStateDispatchToProps)(Account);

export {connectedItems as Account};
