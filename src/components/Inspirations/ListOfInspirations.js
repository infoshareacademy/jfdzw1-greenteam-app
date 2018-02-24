import React from 'react';
import {Row} from 'react-bootstrap';

import {Inspiration} from './Inspiration';

const ListOfInspirations = (props) => {

  return (
    <Row>
      {props.clothesList.map((item, id) =>
        <Inspiration
          key={id}
          img={item.img}
          favorite={item.favorite}
        />
      )}
    </Row>
  )
};

export default ListOfInspirations;


