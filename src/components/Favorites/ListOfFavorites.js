import React from 'react';
import {Row} from 'react-bootstrap';

import {Favorite} from './Favorite';

const ListOfFovorites = (props) => {

    return (
        <Row>
            {props.favoritesList.map((item,id) =>
                <Favorite
                    key= {id}
                    img= {item.img}
                />
            )}
        </Row>
    )
};

export default ListOfFovorites;


