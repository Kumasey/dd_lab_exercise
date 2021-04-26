import React from 'react';
import Dashboard from './Dashboard';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

const App = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Dashboard} />
            </Switch>
        </BrowserRouter>
    )
};


export default App;
