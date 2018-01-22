import React, {Component} from 'react';
import {Form, FormControl, Col} from 'react-bootstrap';

import dataset from '../dataset/dataset.json';

import ClothItem from '../components/ClothItem';

class ListOfClothesItems extends Component {

    render() {

        return (
            <div>
                {dataset
                    .filter(item =>item.gender === 'female')
                    .map((item,i) =>
                        <ClothItem
                            key={item.id}
                            id={item.id}
                            title={item.title}
                            img={item.img}
                            gender={item.gender}
                        />
                )}

            </div>
        );
    }
}

export default ListOfClothesItems;