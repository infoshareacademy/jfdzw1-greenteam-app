import React from "react";
import { NavLink } from "react-router-dom";

const Footer = () => (


    <div>
        <hr/>

        <ul className="list-inline">
            <li>
                <NavLink exact to={"/"} activeClassName="bg-success">
                   Log in
                </NavLink>
            </li>

            <li>
                <NavLink activeClassName="bg-success" to={"/inspiration"}>
                    Inspiration
                </NavLink>
            </li>


        </ul>
    </div>
);

export default Footer;