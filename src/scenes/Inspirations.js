import React from 'react';
import {Row, Col } from 'react-bootstrap';

import ListOfClothesItems from '../components/ListOfClothesItems';



const Inspirations = () => (
    <Row className="show-grid">
        <Col xs={12}>
            <h2>Inspirations</h2>
            <ListOfClothesItems/>

        </Col>
    </Row>
);

export default Inspirations;