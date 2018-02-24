import React from 'react';
import { Grid } from 'react-bootstrap';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import thunk from 'redux-thunk';

import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

import reducer from './reducers';

import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Register } from './components/Register';
import { Login } from './components/Login';
import { Inspirations } from './scenes/Inspirations';
import { Favorites } from './scenes/Favorites';
import { Account } from './scenes/Account';


const store = createStore(
    reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
    applyMiddleware(thunk),
);

class App extends React.Component {
    render() {
        return (
            <BrowserRouter>
                <Provider store={store}>
                    <Grid>
                        <h1>Hello</h1>
                        <Header />
                        <Switch>
                            <Route path={"/register"} component={Register} />
                            <Route exact path="/login" component={Login} />
                            <Route path={"/inspiration"} component={Inspirations} />
                            <Route path={"/favorites"} component={Favorites} />
                            <Route path={"/account"} component={Account} />
                        </Switch>
                        <Footer />
                    </Grid>
                </Provider>
            </BrowserRouter>
        );
    }
}

export default App;