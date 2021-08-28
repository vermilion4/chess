
import React, { Component } from "react";
import { Router, Switch, Route } from "react-router-dom";

import App from "./App";
import Chessboard from "./chessboard";
import history from "./history";

export default class Routes extends Component {
    render() {
        return (
            <Router history={history}>
                <Switch>
                    <Route path="/" exact component={App} />
                    <Route path="/chess" component={Chessboard} />
                </Switch>
            </Router>
        )
    }
}
