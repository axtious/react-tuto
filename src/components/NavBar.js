import React from 'react';
import {withRouter} from "react-router-dom";

const NavBar = () => {
    return (
        <div className="container">
            <a href="/">home</a><br/>
            <a href="/info">Info</a><br/>
            <a href="/contact">Contact</a><br/>
        </div>
    );
}

export default withRouter(NavBar);