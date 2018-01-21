import React from 'react'

import { Jumbotron} from 'react-bootstrap'
import ListOfClothesItems from './components/ListOfClothesItems'
import SignUp from './components/SignUp'
import CurrentWeather from './components/CurrentWeather';

const App = () => [
    <Jumbotron>
        <h1>Outfits by weather</h1>
        <SignUp/>
    </Jumbotron>,

    <ListOfClothesItems/>,
  <CurrentWeather/>

    ]

export default App;