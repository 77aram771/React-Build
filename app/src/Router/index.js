/**
 * Created by Aram on 04/10/2019.
 */

import React from 'react';
import {Switch, Route} from "react-router-dom";
import About from "../pages/About/index";
import Profile from "../pages/Profile/index";
import Home from "../pages/Home/index";

function Routers() {
    return (
        <Switch>
            <Route path="/" component={Home} exact/>
            <Route path="/about" component={About}/>
            <Route path="/Profile" component={Profile}/>
        </Switch>
    );
}

export default Routers;