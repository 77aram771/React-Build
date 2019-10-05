import React from "react";
import {BrowserRouter as Router} from "react-router-dom";

import NavBar from "./container/NavBar";
import Routers from "./Router/index";

export default function App() {
    return (
        <Router>
            <NavBar/>
            <Routers/>
        </Router>
    );
}