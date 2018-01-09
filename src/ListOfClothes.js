import React from 'react'

import { Grid, Row, Col, Thumbnail, Image } from 'react-bootstrap'

import man1 from './img/man/andrew-neel-369701.jpg';
import man2 from './img/man/david-lezcano-225889.jpg';
import man3 from './img/man/jacob-rank-111336.jpg';
import man4 from './img/man/jason-briscoe-105342.jpg';
import man5 from './img/man/mathias-arlund-494957.jpg';
import man6 from './img/man/nordwood-themes-162465.jpg';
import man7 from './img/man/sean-pollock-197711.jpg';
import man8 from './img/man/sophie-sollmann-94019.jpg';
import woman1 from './img/woman/becca-tarter-481439.jpg';
import woman2 from './img/woman/drew-coffman-98518.jpg';
import woman3 from './img/woman/maja-karlsson-94320.jpg';
import woman4 from './img/woman/pete-bellis-189610.jpg';
import woman5 from './img/woman/pete-bellis-229665.jpg';
import woman6 from './img/woman/pete-bellis-310093.jpg';
import woman7 from './img/woman/pete-bellis-448200.jpg';


export class ListOfClothes extends React.Component {
    render() {
        return (
            <Grid>
                <Row>
                    <Col xs={6} md={3}>
                        <Thumbnail href="#" alt="171x180" src={man1} />
                    </Col>
                    <Col xs={6} md={3}>
                        <Thumbnail href="#" alt="171x180" src={man2} />
                    </Col>
                    <Col xs={6} md={3}>
                        <Thumbnail href="#" alt="171x180" src={man3} />
                    </Col>
                    <Col xs={6} md={3}>
                        <Thumbnail href="#" alt="171x180" src={man4} />
                    </Col>
                </Row>
                <Row>
                    <Col xs={6} md={3}>
                        <Thumbnail href="#" alt="171x180" src={man5} />
                    </Col>
                    <Col xs={6} md={3}>
                        <Thumbnail href="#" alt="171x180" src={man6} />
                    </Col>
                    <Col xs={6} md={3}>
                        <Thumbnail href="#" alt="171x180" src={man7} />
                    </Col>
                    <Col xs={6} md={3}>
                        <Thumbnail href="#" alt="171x180" src={man8} />
                    </Col>
                </Row>
                <Row>
                    <Col xs={6} md={3}>
                        <Thumbnail href="#" alt="171x180" src={woman1} />
                    </Col>
                    <Col xs={6} md={3}>
                        <Thumbnail href="#" alt="171x180" src={woman2} />
                    </Col>
                    <Col xs={6} md={3}>
                        <Thumbnail href="#" alt="171x180" src={woman3} />
                    </Col>
                    <Col xs={6} md={3}>
                        <Thumbnail href="#" alt="171x180" src={woman4} />
                    </Col>
                </Row>
                <Row>
                    <Col xs={6} md={3}>
                        <Thumbnail href="#" alt="171x180" src={woman5} />
                    </Col>
                    <Col xs={6} md={3}>
                        <Thumbnail href="#" alt="171x180" src={woman6} />
                    </Col>
                    <Col xs={6} md={3}>
                        <Thumbnail href="#" alt="171x180" src={woman7} />
                    </Col>
                </Row>
            </Grid>
        );
    }
}