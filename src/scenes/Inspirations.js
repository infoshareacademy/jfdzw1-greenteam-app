import React, {Component} from 'react';
import {Row, Col} from 'react-bootstrap';
import {connect} from 'react-redux';

import ListOfClothesItems from '../components/ListOfClothesItems';


class Inspirations extends Component {

    componentDidMount() {
        this.props.getItemsFromApi(this.getData);
    }

    getData () {
        return (dispatch) => {
            dispatch({type: "PENDING"});

            fetch(`https://api.tumblr.com/v2/tagged?tag=winter&api_key=W03IyldDeAXIxO8CfqeQ7wFvuOAdSNNjz67l7jGNJdcg7ku7ub`)
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
