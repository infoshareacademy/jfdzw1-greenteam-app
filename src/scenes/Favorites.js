import React, {Component} from 'react';
import {Row, Col} from 'react-bootstrap';
import {connect} from 'react-redux';

import ListOfFavorites from '../components/Favorites/ListOfFavorites';

class Favorites extends Component {

    handleSaveList = (event) => {
        event.preventDefault();
        this.props.saveList(this.saveList);
    };

    saveList = ()=> {
        const userData = {
            login: this.props.user.login,
            email: this.props.user.email,
            gender: this.props.user.gender,
            favorites: this.props.user.favorites
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

            <Row className="show-grid">
                <Col xs={12}>
                    <h2>Favorites</h2>
                    <hr/>
                    <button className ='saveBtn' onClick={this.handleSaveList}>Save list</button>
                    <ListOfFavorites
                        favoritesList={this.props.user.favorites}
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

const mapStateDispatchToProps = (dispatch) => {
    return {
        saveList:(reg) => dispatch (reg())
    }
};

const connectedItems = connect(mapStateToProps,mapStateDispatchToProps)(Favorites);

export {connectedItems as Favorites};
