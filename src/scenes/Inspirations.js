import React, {Component} from 'react';
import {Row, Col } from 'react-bootstrap';

import {ListOfClothesItems} from '../components/ListOfClothesItems';



class Inspirations extends Component {

    render () {
        return (
            <Row className="show-grid">
                <Col xs={12}>
                    <h2>Inspirations</h2>
                    <hr/>
                    <ListOfClothesItems/>

                </Col>
            </Row>
        )}
}


export default Inspirations;