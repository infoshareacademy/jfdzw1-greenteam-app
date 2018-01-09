import React from 'react'

import { Jumbotron} from 'react-bootstrap'
import { ListOfClothes } from './ListOfClothes'

export const App = () => [
    <Jumbotron>
        <h1>Outfits by weather</h1>
    </Jumbotron>,
    <ListOfClothes/>
    ]