import React from 'react'

import { Jumbotron} from 'react-bootstrap'
import ListOfClothesItems from './components/ListOfClothesItems'

const App = () => [
    <Jumbotron>
        <h1>Outfits by weather</h1>
    </Jumbotron>,
    <ListOfClothesItems/>
    ]

export default App;