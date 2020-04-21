import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { createBrowserHistory } from 'history';

import HomePage from './layouts/HomePage';

const browserHistory = createBrowserHistory();

class App extends React.Component {
    render() {
        return (
            <Router history={browserHistory}>
                <Switch>
                    <Route path="/" exact component={HomePage} />
                </Switch>
            </Router>
        );
    }
}

let root = document.getElementById('root');

render(<App />, root);