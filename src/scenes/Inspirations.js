import React, {Component} from 'react';
import {Row, Col} from 'react-bootstrap';
import {connect} from 'react-redux';

import ListOfInspirtaions from '../components/Inspirations/ListOfInspirations';


class Inspirations extends Component {

    componentDidMount() {
        this.props.getItemsFromApi(this.getData,this.props.user.gender);
    }

    getData (userGender) {
        const seasons = ['winter', 'spring', 'summer', 'autumn'];
        const getRandomSeason = Math.floor (Math.random () * seasons.length);

        const femaleInspirations = ['outfits', 'fashion', 'trends'];
        const getRandomfemaleInspirations = Math.floor (Math.random () * femaleInspirations.length);

        const inspirations = (userGender === 'female') ? `${femaleInspirations[getRandomfemaleInspirations]}` : "inspirations";

        return (dispatch) => {
            dispatch({type: "PENDING_GET_ITEMS"});

            fetch(`https://api.tumblr.com/v2/tagged?tag=${seasons[getRandomSeason]}+${inspirations}&api_key=W03IyldDeAXIxO8CfqeQ7wFvuOAdSNNjz67l7jGNJdcg7ku7ub`)
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
                    <ListOfInspirtaions
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
        user: state.login.userData
    }
};

const mapStateDispatchToProps = (dispatch) => {
    return {
        getItemsFromApi: (getData,userGender) => dispatch(getData(userGender))
    }
};

const connectedItems = connect(mapStateToProps, mapStateDispatchToProps)(Inspirations);

export {connectedItems as Inspirations};
