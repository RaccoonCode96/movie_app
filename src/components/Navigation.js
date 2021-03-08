import React from "react";
import { Link } from "react-router-dom";
import "./Navigation.css"

function Navigation() {
    return (<div className="buttons">
        <Link to="/" className="button">Home</Link>
        <Link to="/about" className="button">About</Link>
    </div>
    );
}

export default Navigation;