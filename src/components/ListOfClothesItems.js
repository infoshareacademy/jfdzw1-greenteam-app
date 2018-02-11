import React, {Component} from 'react';
import {Row} from 'react-bootstrap';


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
                    .filter(item => item.photos && item.photos.length)
                    .map(item => (
                        {
                            img:item.photos[0].original_size.url,
                            favorite: false
                        }
                    ))
                this.setState({itemsList: result});

                console.log(this.state.itemsList)
            });
    }


    render() {
        return (
            <Row>
                {this.state.itemsList.map((item, id) =>
                        <ClothItem
                            key= {id}
                            id= {id}
                            img= {item.img}
                        />
                )}

            </Row>
        );
    }
}



export default ListOfClothesItems;