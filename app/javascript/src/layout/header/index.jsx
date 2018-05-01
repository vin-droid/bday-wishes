import React from "react";
import {render} from "react-dom";
import {NavLink} from "react-router-dom";
import {BrowserRouter as Router} from "react-router-dom";
export const Header = (props) => {
    return (
        <header id="fh5co-header" role="banner">
            <div className="container">
                <div className="header-inner">
                    <h1>
                        <i className="sl-icon-energy"></i>
                        <NavLink to="/">Lesser</NavLink>
                    </h1>
                    <nav role="navigation">
                        <ul>
                            <li>
                                <NavLink exact activeClassName={"active"} to="/home">Home</NavLink>
                            </li>
                            <li>
                                <NavLink activeClassName={"active"} to="/blog">Blog</NavLink>
                            </li>
                            <li>
                                <NavLink activeClassName={"active"} to="/portfolio">Portfolio</NavLink>
                            </li>
                            <li>
                                <NavLink activeClassName={"active"} to="/services">Services</NavLink>
                            </li>
                            <li>
                                <NavLink activeClassName={"active"} to="/about">About</NavLink>
                            </li>
                            <li>
                                <NavLink activeClassName={"active"} to="/contact">Contact</NavLink>
                            </li>
                            <li>
                                <NavLink activeClassName={"active"} to="/todo">Todo</NavLink>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
    );
};
