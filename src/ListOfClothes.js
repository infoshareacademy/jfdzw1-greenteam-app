import React from 'react'

import { Grid, Row, Col, Thumbnail } from 'react-bootstrap'

export const ListOfClothes = () => (
    <Grid>
        <Row>
            <Col xs={6} md={3}>
                <Thumbnail href="#" alt="171x180" src="/thumbnail.png" />
            </Col>
            <Col xs={6} md={3}>
                <Thumbnail href="#" alt="171x180" src="/thumbnail.png" />
            </Col>
            <Col xs={6} md={3}>
                <Thumbnail href="#" alt="171x180" src="/thumbnail.png" />
            </Col>
        </Row>
    </Grid>
);