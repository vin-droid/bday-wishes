import React from "react";
import {render} from "react-dom";
import {NavLink} from "react-router-dom";
import {BrowserRouter as Router} from "react-router-dom";

class Header extends React.Component{
    constructor(){
        super();
    }
    render(){
        return (
            <div>
                <div >
                    <h1>
                        <NavLink to="/">New</NavLink>
                    </h1>
                    <nav role="navigation">
                        <ul>
                            <li>
                                <NavLink exact activeClassName={"active"} to="/home">Home</NavLink>
                            </li>
                            <li>
                                <NavLink activeClassName={"active"} to="/blog">Blog</NavLink>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        );
    }
}

render(<Header/>, window.document.getElementById("header"));