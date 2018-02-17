import React from 'react';

import { Col, Thumbnail} from 'react-bootstrap';

const ClothItem = (props) => {
    const item = {
        id: props.id,
        img: props.img,
    }


    return (
        <Col xs={12} sm={6} md={3}>

            <Thumbnail href="#" alt="171x180" src={item.img} />

        </Col>
    );
}

export default ClothItem;