import React from "react";
import "./Nav.css";

const Nav = props =>
    <nav class="navbar">
        <ul>
            <li class="brand"><a href="/">Clicky Game</a></li>
            <li class="">You guessed incorrectly!</li>
            <li>Score: 0 | Top Score: 7</li>
        </ul>
    </nav>
    
;


export default Nav;
