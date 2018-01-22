import React, {Component} from 'react'

import { Col, Thumbnail} from 'react-bootstrap'

const ClothItem = (props) => {
    const item = {
        id: props.id,
        title:props.title,
        img: props.img,
        gender:props.gender,
    }

    return (
        <Col xs={12} sm={6} md={3}>

            <Thumbnail href="#" alt="171x180" src={item.img} />
            <p>Gender: {item.gender}</p>
        </Col>
    );
}

export default ClothItem;