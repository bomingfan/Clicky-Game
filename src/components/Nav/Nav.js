import React from "react";


const Nav = props =>
    <nav className="navbar">
        <ul>
            <li className="brand"><a href="/">Clicky Game</a></li>
            <li className="">You guessed incorrectly!</li>
            <li>Score: {props.score} | Top Score: {props.topScore}</li>
        </ul>
    </nav>
    
;


export default Nav;
