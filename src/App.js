import React from 'react'

import { Jumbotron} from 'react-bootstrap'
import ListOfClothesItems from './components/ListOfClothesItems'
import SignUp from './components/SignUp'
import FavoriteChoices from "./components/FavoriteChoices";
const App = () => [
    <Jumbotron>
        <h1>Outfits by weather</h1>
        <SignUp/>
    </Jumbotron>,
    <ListOfClothesItems/>

    ]

export default App;