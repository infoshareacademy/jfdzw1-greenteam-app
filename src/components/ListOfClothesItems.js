import React, {Component} from 'react';
import {Form, FormControl, Col, Row} from 'react-bootstrap';

import dataset from '../dataset/dataset.json';

import ClothItem from '../components/ClothItem';

class ListOfClothesItems extends Component {

    render() {
        return (
            <Row>
                {dataset
                    .filter(item =>item.gender === this.props.filterCarts)
                    .map((item,i) =>
                        <ClothItem
                            key={item.id}
                            id={item.id}
                            title={item.title}
                            img={item.img}
                            gender={item.gender}
                        />
                )}

            </Row>
        );
    }
}

export default ListOfClothesItems;