import React, {Component} from 'react';
import {Row} from 'react-bootstrap';

import {connect} from "react-redux"

import ClothItem from '../components/ClothItem';

class ListOfClothesItems extends Component {

    state = {
        itemsList: []
    };


    componentDidMount() {
        this.props.getItemsFromApi();
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

const getData = () => {
    return (dispatch) => {
        dispatch({type: "PENDING"});

        console.log(dispatch)

        fetch("https://api.tumblr.com/v2/tagged?tag=winter+woman&api_key=W03IyldDeAXIxO8CfqeQ7wFvuOAdSNNjz67l7jGNJdcg7ku7ub")
            .then(rsp => rsp.json())
            .then(data => {
                dispatch({
                    type: "SUCCESS",
                    itemsList: data.response
                        .filter(item => item.photos && item.photos.length)
                        .map(item => {
                            return {
                                img: item.photos[0].original_size.url,
                                favorite: false
                            }
                        })

                });
            }).catch(err => {
                dispatch({type: "ERROR"})
            });
}};

const mapDispatchToProps = (dispatch) => {
    return {
        getItemsFromApi: () => dispatch(getData())
    }
};

const connectedItems = connect(null, mapDispatchToProps)(ListOfClothesItems);

export {connectedItems as ListOfClothesItems};
