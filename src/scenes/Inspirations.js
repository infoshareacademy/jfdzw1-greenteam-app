import React, {Component} from 'react';
import {Row, Col, Button } from 'react-bootstrap';

import ListOfClothesItems from '../components/ListOfClothesItems';



class Inspirations extends Component {
    state = {
        cartItemFilter: 'female',
    }

    render () {
        return (
            <Row className="show-grid">
                <Col xs={12}>
                    <h2>Inspirations</h2>
                    <div>
                        <Button onClick={() => {this.setState({cartItemFilter: 'female'})}}>Female</Button>
                        <Button onClick={() => {this.setState({cartItemFilter: 'male'})}}>Male</Button>
                    </div>
                    <hr/>
                    <ListOfClothesItems filterCarts={this.state.cartItemFilter}/>

                </Col>
            </Row>
        )}
}


export default Inspirations;