import React from 'react';
import {connect} from 'react-redux';

import { Col, Thumbnail} from 'react-bootstrap';

const Favorite = (props) => {
    const item = {
        img: props.img,
    };

    const handleClickRemoveFavorite = () => {
        props.removeFavorite(item.img);
    };

    return (
        <Col xs={12} sm={6} md={3}>
            <div className ='colthItem'>
                <Thumbnail href="#" alt="171x180" src={item.img} />

                <button className ='addedToFavorites' onClick={handleClickRemoveFavorite}>Remove from list</button>


            </div>
        </Col>
    )
};


const mapDispatchToProps = (dispatch) => {
    return {
        removeFavorite: (id) => dispatch({
            type: "REMOVE_FAVORITE",
            id
        })
    }
};


const connectedCounter = connect(null, mapDispatchToProps)(Favorite);

export {connectedCounter as Favorite};