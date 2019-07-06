import React from "react";
import { Router, Route, Switch } from "react-route";
import { createBrowserHistory } from "history";

import App from "./App";
import HelloWorld from "./HelloWorld";

const browserHistory = createBrowserHistory();

export const renderRoutes = () => (
    <Router history={browserHistory}>
        <Switch>
            <Route exact path="/helloWorld" component={HelloWorld} />
            <Route exact path="/" component={App} />
        </Switch>
    </Router>
);