import React from 'react';
import { Grid } from 'react-bootstrap';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import Header from './components/Header';
import Footer from './components/Footer';
import {Form} from './components/SignUp';
import Inspirations from './scenes/Inspirations';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import reducer from './reducers'

const store = createStore (reducer);

class App extends React.Component {

    render() {

        return (
            <BrowserRouter>
                <Provider store={store}>
                    <Grid>
                        <h1>Hello</h1>
                        <Header/>
                        <Switch>
                            <Route exact path="/" component={Form}/>
                            <Route path={"/inspiration"} component={Inspirations}/>
                        </Switch>
                        <Footer/>
                    </Grid>

                </Provider>
            </BrowserRouter>
        )
    }
}

export default App;