import React from 'react';
import {connect} from 'react-redux';

import './ClothItem.css';

import { Col, Thumbnail, Button} from 'react-bootstrap';

const ClothItem = (props) => {
    const item = {
        img: props.img,
        favorite: props.favorite
    };

    const handleClickItemAddedToFavorites = () => {
        props.addedToFavorites(props.img);
    };

    return (
        <Col xs={12} sm={6} md={3}>
            <div className ='colthItem'>
                <Thumbnail href="#" alt="171x180" src={item.img} />

                {item.favorite ?
                    <button className ='addedToFavorites'>Added to favorites</button>
                    : <button className ='addToFavorites' onClick={handleClickItemAddedToFavorites}>Add to favorites</button>}

            </div>
        </Col>
    )
};


const mapDispatchToProps = (dispatch) => {
    return {
        addedToFavorites: (id) => dispatch({
            type: "ADD_TO_FAVORITES",
            id,
        }),
    }
};


const connectedCounter = connect(null, mapDispatchToProps)(ClothItem);

export {connectedCounter as ClothItem};