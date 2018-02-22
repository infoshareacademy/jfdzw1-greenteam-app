import React from 'react';
import {Row} from 'react-bootstrap';

import {ClothItem} from './ClothItem';

const ListOfClothesItems = (props) => {

        return (
            <Row>
                {props.clothesList.map((item,id) =>
                        <ClothItem
                            key= {id}
                            img= {item.img}
                            favorite={item.favorite}
                        />
                )}
            </Row>
        )
};

export default ListOfClothesItems;


