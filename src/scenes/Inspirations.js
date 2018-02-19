import React, {Component} from 'react';
import {Row, Col} from 'react-bootstrap';
import {connect} from 'react-redux';

import ListOfClothesItems from '../components/ClothItems/ListOfClothesItems';


class Inspirations extends Component {

    componentDidMount() {
        this.props.getItemsFromApi(this.getData);
    }

    getData () {
        const seasons = ['winter', 'spring', 'summer', 'autumn'];
        const getRandomSeason = Math.floor (Math.random () * seasons.length);

        return (dispatch) => {
            dispatch({type: "PENDING_GET_ITEMS"});

            fetch(`https://api.tumblr.com/v2/tagged?tag=${seasons[getRandomSeason]}+men&api_key=W03IyldDeAXIxO8CfqeQ7wFvuOAdSNNjz67l7jGNJdcg7ku7ub`)
                .then(rsp => rsp.json())
                .then(data => {
                    dispatch({
                        type: "SUCCESS_GET_ITEMS",
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
                dispatch({type: "ERROR_GET_ITEMS"})
            });
        }
    };

    render() {
        return (
            <Row className="show-grid">
                <Col xs={12}>
                    <h2>Inspirations</h2>
                    <hr/>
                    <ListOfClothesItems
                        clothesList={this.props.items}
                    />

                </Col>
            </Row>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        items: state.clothesItems.items,
        user: state.login
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        getItemsFromApi: (getData) => dispatch(getData())
    }
};

const connectedItems = connect(mapStateToProps, mapDispatchToProps)(Inspirations);

export {connectedItems as Inspirations};
