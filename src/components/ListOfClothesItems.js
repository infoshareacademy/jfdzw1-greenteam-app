import React, {Component} from 'react';
import {Form, FormControl, Col, Row} from 'react-bootstrap';


import ClothItem from '../components/ClothItem';

class ListOfClothesItems extends Component {

    state = {
        itemsList: []
    };

    componentDidMount() {
        fetch("https://api.tumblr.com/v2/tagged?tag=winter+woman&api_key=W03IyldDeAXIxO8CfqeQ7wFvuOAdSNNjz67l7jGNJdcg7ku7ub")
            .then(rsp => rsp.json())
            .then(data => {
                const result = data.response
                    .filter(item=> item.photos && item.photos.length)
                    .map(item=> item.photos[0].original_size.url)
                this.setState({itemsList: result});
                console.log(this.state.itemsList)
            });
    }


    render() {
        return (
            <Row>
                {this.state.itemsList.map(item =>
                        <ClothItem

                            img={item}

                        />
                )}

            </Row>
        );
    }
}

export default ListOfClothesItems;