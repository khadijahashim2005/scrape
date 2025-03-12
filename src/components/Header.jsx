import React from "react";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";

const Header = () => {
    return(
        <div className="header">
            <div className="header-left">
                <img src={logo} alt="SCR4PE Logo" className="logo" />
                <h1>SCR4PE</h1>
            </div>
            <div className="header-controls">
                <select>
                    <option>Sort by: A-Z</option>
                    <option>Sort by: Z-A</option>
                </select>
                <input type="text" placeholder="Search..." />
            </div>
        </div>
    );
};

export default Header;