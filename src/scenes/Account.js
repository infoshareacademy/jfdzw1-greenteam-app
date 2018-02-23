import React, {Component} from 'react';
import {Row, Col} from 'react-bootstrap';
import {connect} from 'react-redux';

import UserAccount from '../components/UserAccount/UserAccount';


class Account extends Component {

    render() {

        return (

            <Row className="show-grid">
                <Col xs={12}>
                    <h2>Account</h2>
                    <hr/>
                    <UserAccount
                        login = {this.props.user.login}
                        email = {this.props.user.email}
                        gender = {this.props.user.gender}
                    />

                </Col>
            </Row>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        user: state.login.userData
    }
};


const connectedItems = connect(mapStateToProps)(Account);

export {connectedItems as Account};
