import React, {Component} from 'react'
import {Form, FormControl, Col} from 'react-bootstrap'

import dataset from '../dataset/dataset.json';

import ClothItem from '../components/ClothItem'

class ListOfClothesItems extends Component {
    state = {
        user: {}
    };

    handleChange = (e) => {
        e.preventDefault();
        console.log(e)
    }

    render() {

        return (
            <div>
                <Col>
                    <Form>
                        <FormControl componentClass="select" placeholder="select">
                            <option value="all">all</option>
                            <option value="female">female</option>
                            <option value="male">male</option>
                        </FormControl>
                    </Form>
                </Col>

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