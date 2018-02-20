import React from 'react';
import './ClothItem.css'

import { Col, Thumbnail, Button} from 'react-bootstrap';

const ClothItem = (props) => {
    const item = {
        id: props.id,
        img: props.img,
        favorite: props.favorite
    };

    return (
        <Col xs={12} sm={6} md={3}>
            <div className ='colthItem'>
                <Thumbnail href="#" alt="171x180" src={item.img} />

                {item.favorite ?
                    <button className ='addedToFavorites'>Added to favorites</button>
                    : <button className ='addToFavorites'>Add to favorites</button>}


            </div>
        </Col>
    )
};

export default ClothItem;