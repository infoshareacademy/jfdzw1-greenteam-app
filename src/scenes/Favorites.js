import React, {Component} from 'react';
import {Row, Col} from 'react-bootstrap';
import {connect} from 'react-redux';

import ListOfFavorites from '../components/Favorites/ListOfFavorites';

class Favorites extends Component {

    render() {

        return (

            <Row className="show-grid">
                <Col xs={12}>
                    <h2>Favorites</h2>
                    <hr/>
                    {!this.props.user.isSaved ?
                        <button className ='saveList'>Save list</button>
                        : null
                    }
                    <ListOfFavorites
                        favoritesList={this.props.user.userData.favorites}
                    />


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


const connectedItems = connect(mapStateToProps)(Favorites);

export {connectedItems as Favorites};
