import React from 'react';
import {connect} from 'react-redux';
import * as actions from '../../reducers/actions/actions';

import {Col, Thumbnail} from 'react-bootstrap';

const ClothItem = (props) => {
  const item = {
    img: props.img,
    favorite: props.favorite
  };

  const handleClickItemAddedToFavorites = () => {
    props.addedToFavorites(item.img);
    props.addInspirationToFavorites(item.img);
  };

  return (
    <Col xs={12} sm={6} md={3}>
      <div className='colthItem'>
        <Thumbnail href='#' alt='171x180' src={item.img}/>

        {item.favorite ?
          <button className='addedToFavorites'>Added to favorites</button>
          : <div className='heart' onClick={handleClickItemAddedToFavorites}>Add</div>}

      </div>
    </Col>
  )
};

const mapDispatchToProps = (dispatch) => {
  return {
    addedToFavorites: (id) => dispatch({
      type: actions.ADD_TO_FAVORITES,
      id
    }),
    addInspirationToFavorites: (id) => dispatch({
      type: actions.ADD_INSPIRATION_TO_FAVORITES,
      id
    })
  };
};

const connectedCounter = connect(null, mapDispatchToProps)(ClothItem);

export {connectedCounter as Inspiration};