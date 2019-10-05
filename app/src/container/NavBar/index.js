/**
 * Created by Aram on 04/10/2019.
 */

import React from 'react';
import './style.scss';
import {NavLink} from "react-router-dom";

function NavBar() {
    return (
        <div className="NavBar">
            <nav>
                <ul>
                    <li>
                        <NavLink to="/">Home</NavLink>
                    </li>
                    <li>
                        <NavLink to="/about">About</NavLink>
                    </li>
                    <li>
                        <NavLink to="/Profile">Profile</NavLink>
                    </li>
                </ul>
            </nav>
        </div>
    );
}

export default NavBar;
