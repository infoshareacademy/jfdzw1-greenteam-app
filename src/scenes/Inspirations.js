import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';
import { connect } from 'react-redux';
import ListOfInspirtaions from '../components/Inspirations/ListOfInspirations';
import * as actions from '../reducers/actions/actions';
import * as appConsts from '../consts';
import { getInspirations } from '../reducers/actions/inspirations';

class Inspirations extends Component {

    componentDidMount() {
        this.props.getItemsFromApi(this.props.user.gender);
    }

    render() {
        return (
            <Row className='show-grid'>
                <Col xs={12}>
                    <h2>Inspirations</h2>
                    <hr />
                    <ListOfInspirtaions clothesList={this.props.items} />
                </Col>
            </Row>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        items: state.clothesItems.items,
        user: state.login.userData
    }
};

const mapStateDispatchToProps = (dispatch) => {
    return {
        getItemsFromApi: (userGender) => dispatch(getInspirations(userGender))
    }
};

const connectedItems = connect(mapStateToProps, mapStateDispatchToProps)(Inspirations);

export { connectedItems as Inspirations };
