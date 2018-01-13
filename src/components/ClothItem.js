import React, {Component} from 'react'

import { Col, Thumbnail} from 'react-bootstrap'

const ClothItem = (props) => {
    const image = {
        src: props.src
    }

    return (
        <Col xs={12} sm={6} md={3}>
            <Thumbnail href="#" alt="171x180" src={image.src} />
        </Col>
    );
}

export default ClothItem;