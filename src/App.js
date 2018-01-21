import React from 'react'
import ListOfClothesItems from './components/ListOfClothesItems'
import SignUp from './components/SignUp'
import { Grid } from "react-bootstrap";
import {BrowserRouter, Route, Switch} from "react-router-dom"
import Header from "./components/Header";
import Footer from './components/Footer';


class App extends React.Component {

    render() {

        return (
            <BrowserRouter>
                <Grid>
                    <h1>Hello world</h1>
                    <Header/>

                    <Switch>
                        <Route exact path="/" component={SignUp}/>
                        <Route path={"/inspiration"} component={ListOfClothesItems}/>

                    </Switch>

                    <Footer/>
                </Grid>
            </BrowserRouter>
        )
    }
}

export default App;