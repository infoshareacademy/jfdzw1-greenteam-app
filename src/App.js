import React from 'react';
import { Grid } from 'react-bootstrap';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import Header from './components/Header';
import Footer from './components/Footer';
import SignUp from './components/SignUp';
import Inspirations from './scenes/Inspirations';


class App extends React.Component {

    render() {

        return (
            <BrowserRouter>
                <Grid>
                    <h1>Hello world</h1>
                    <Header/>

                    <Switch>
                        <Route exact path="/" component={SignUp}/>
                        <Route path={"/inspiration"} component={Inspirations}/>

                    </Switch>

                    <Footer/>
                </Grid>
            </BrowserRouter>
        )
    }
}

export default App;